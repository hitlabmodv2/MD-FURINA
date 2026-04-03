const axios = require('axios');
const cheerio = require('cheerio');
const vm = require('node:vm');

async function getIGMeta(url) {
    try {
        const { data } = await axios.get(url, {
            timeout: 15000,
            headers: {
                'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        });
        const $ = cheerio.load(data);
        const ogTitle = $('meta[property="og:title"]').attr('content') || '';
        const ogDesc = $('meta[property="og:description"]').attr('content') || '';
        const ogImage = $('meta[property="og:image"]').attr('content') || null;

        let username = '-', caption = '-', likes = '0', comments = '0', date = '-';

        const descMatch = ogDesc.match(/^([\d,]+)\s*likes?,\s*([\d,]+)\s*comments?\s*-\s*(\S+)\s+on\s+([^:]+):\s*"?(.+?)"?\.?\s*$/i);
        if (descMatch) {
            likes = descMatch[1].replace(/,/g, '.');
            comments = descMatch[2].replace(/,/g, '.');
            username = descMatch[3];
            date = descMatch[4].trim();
            caption = descMatch[5].trim();
        } else {
            const userMatch = ogDesc.match(/-\s*(\S+)\s+on\s+/);
            if (userMatch) username = userMatch[1];
            const likeMatch = ogDesc.match(/([\d,]+)\s*likes?/i);
            if (likeMatch) likes = likeMatch[1].replace(/,/g, '.');
            const commentMatch = ogDesc.match(/([\d,]+)\s*comments?/i);
            if (commentMatch) comments = commentMatch[1].replace(/,/g, '.');
        }

        if (caption === '-' && ogTitle) {
            const titleMatch = ogTitle.match(/:\s*"?(.+?)"?\s*$/);
            if (titleMatch) caption = titleMatch[1].trim();
        }

        return { username, caption, likes, comments, date, thumbnail: ogImage };
    } catch (e) {
        return { username: '-', caption: '-', likes: '0', comments: '0', date: '-', thumbnail: null };
    }
}

async function indown(url) {
    try {
        const { data: pageData, headers } = await axios.get('https://indown.io/en1', {
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        const $ = cheerio.load(pageData);
        const token = $('input[name="_token"]').val();
        const cookies = headers['set-cookie'] ? headers['set-cookie'].map(v => v.split(';')[0]).join('; ') : '';

        if (!token) throw new Error('Token Indown not found');

        const params = new URLSearchParams();
        params.append('referer', 'https://indown.io/en1');
        params.append('locale', 'en');
        params.append('_token', token);
        params.append('link', url);
        params.append('p', 'i');

        const { data: resultData } = await axios.post('https://indown.io/download', params, {
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': cookies,
                'Referer': 'https://indown.io/en1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        const $result = cheerio.load(resultData);
        const resultUrls = [];

        $result('video source[src], a[href].btn-outline-primary').each((i, e) => {
            let link = $result(e).attr('src') || $result(e).attr('href');
            if (link) {
                if (link.includes('indown.io/fetch')) {
                    try { link = decodeURIComponent(new URL(link).searchParams.get('url')); } catch (err) {}
                }
                if (/cdninstagram\.com|fbcdn\.net/.test(link)) {
                    resultUrls.push(link.replace(/&dl=1$/, ''));
                }
            }
        });

        const uniqueUrls = [...new Set(resultUrls)];
        if (uniqueUrls.length === 0) throw new Error('No media found');

        return { status: true, source: 'indown', downloadUrl: uniqueUrls };

    } catch (e) {
        return { status: false, message: e.message };
    }
}

async function snapsave(targetUrl) {
    try {
        const form = new URLSearchParams();
        form.append('url', targetUrl);

        const { data } = await axios.post('https://snapsave.app/id/action.php?lang=id', form, {
            timeout: 20000,
            headers: {
                'origin': 'https://snapsave.app',
                'referer': 'https://snapsave.app/id/download-video-instagram',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        const ctx = {
            window: {},
            document: { getElementById: () => ({ value: '' }) },
            console: console,
            eval: (res) => res
        };

        vm.createContext(ctx);
        const decoded = vm.runInContext(data, ctx);
        const decodedStr = String(decoded);

        const patterns = [
            /https:\/\/d\.rapidcdn\.app\/v2\?[^"]+/g,
            /https?:\/\/[^\s"'<>]+(?:cdninstagram|fbcdn)[^\s"'<>]+/g,
        ];

        let cleanUrls = [];
        for (const p of patterns) {
            const matches = decodedStr.match(p);
            if (matches && matches.length > 0) {
                cleanUrls = [...new Set(matches.map(u => u.replace(/&amp;/g, '&')))];
                break;
            }
        }

        if (cleanUrls.length === 0) throw new Error('No media found');

        return { status: true, source: 'snapsave', downloadUrl: cleanUrls };

    } catch (e) {
        return { status: false, message: e.message };
    }
}

async function igdl(url) {
    const [dlResult, meta] = await Promise.all([
        indown(url).catch(() => ({ status: false })),
        getIGMeta(url)
    ]);

    if (dlResult.status && dlResult.downloadUrl && dlResult.downloadUrl.length > 0) {
        return {
            status: true,
            source: dlResult.source,
            result: {
                metadata: meta,
                downloadUrl: dlResult.downloadUrl
            }
        };
    }

    const snap = await snapsave(url);
    if (snap.status && snap.downloadUrl && snap.downloadUrl.length > 0) {
        return {
            status: true,
            source: snap.source,
            result: {
                metadata: meta,
                downloadUrl: snap.downloadUrl
            }
        };
    }

    return { status: false, message: 'Semua server gagal mengambil media Instagram.' };
}

module.exports = { igdl };
