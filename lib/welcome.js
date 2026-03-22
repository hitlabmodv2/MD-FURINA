const fs = require('fs');
const axios = require('axios');
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, delay, sleep } = require('./myfunc');
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');
const moment = require('moment-timezone');
const { proto, jidDecode, jidNormalizedUser, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage } = require('socketon');

const loadJsonSafe = (path, fallback) => {
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (e) {
    return fallback;
  }
};

let set_welcome_db = loadJsonSafe('./database/set_welcome.json', []);
let set_left_db    = loadJsonSafe('./database/set_left.json', []);
let setting        = loadJsonSafe('./config.json', {});

fs.watchFile('./database/set_welcome.json', { interval: 1000 }, () => {
  set_welcome_db = loadJsonSafe('./database/set_welcome.json', []);
});

fs.watchFile('./database/set_left.json', { interval: 1000 }, () => {
  set_left_db = loadJsonSafe('./database/set_left.json', []);
});

fs.watchFile('./config.json', { interval: 1000 }, () => {
  setting = loadJsonSafe('./config.json', {});
});

const getContactName = (hydro, jid) => {
  try {
    const raw = hydro.getName(jid);
    if (raw && !raw.startsWith('+')) return raw;
    return null;
  } catch {
    return null;
  }
};

const formatWANumber = (jid) => {
  const raw = jid.split('@')[0];
  if (raw.startsWith('62')) {
    return '+62 ' + raw.slice(2);
  }
  return '+' + raw;
};

module.exports.welcome = async (iswel, isleft, hydro, anu) => {
  try {
    // Coba ambil dari cache store dulu, baru fetch ke WA, kalau forbidden pakai fallback
    let metadata;
    try {
      const cached = hydro.store?.groupMetadata?.[anu.id];
      metadata = (cached && cached.participants?.length)
        ? cached
        : await hydro.groupMetadata(anu.id);
    } catch {
      metadata = hydro.store?.groupMetadata?.[anu.id] || { subject: anu.id.split('@')[0], participants: [], desc: '' };
    }

    const participants = anu.participants;
    const groupName = metadata.subject || anu.id.split('@')[0];
    const memberCount = metadata.participants?.length || 0;
    const rawDesc = (metadata.desc || '').trim();
    const groupDesc = rawDesc.length > 0 ? rawDesc : null;
    const fallbackImage = "https://raw.githubusercontent.com/AhmadAkbarID/media/main/weIcome.jpg";
    const now = moment().tz('Asia/Jakarta');
    const timeStr = now.format('HH:mm');
    const dateStr = now.format('DD MMMM YYYY');

    const isActionByAdmin = anu.author && participants.every(p => p !== anu.author);

    for (let num of participants) {
      let pp_user;
      try {
        pp_user = await hydro.profilePictureUrl(jidNormalizedUser(num), 'image');
      } catch {
        pp_user = 'https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg';
      }

      const contactName = getContactName(hydro, num);
      const waNumber = formatWANumber(num);
      const mentionJid = num;
      const mentionText = `@${num.split('@')[0]}`;

      const displayLabel = contactName ? `*${contactName}*` : `*${waNumber}*`;

      if (anu.action === 'add' && (iswel || setting.auto_welcomeMsg)) {
        if (isSetWelcome(anu.id, set_welcome_db)) {
          const get_teks = await getTextSetWelcome(anu.id, set_welcome_db);
          const replaced = get_teks
            .replace(/@user/gi, mentionText)
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc || 'Belum ada deskripsi');
          await hydro.sendMessage(anu.id, { text: replaced, mentions: [mentionJid] });
        } else {
          let welcomeBuffer;
          const canvasName = contactName || waNumber;
          const welcomeUrl = `https://api.siputzx.my.id/api/canvas/welcomev5?` +
            `username=${encodeURIComponent(canvasName)}` +
            `&guildName=${encodeURIComponent(groupName)}` +
            `&memberCount=${memberCount}` +
            `&avatar=${encodeURIComponent(pp_user)}` +
            `&background=${encodeURIComponent('https://raw.githubusercontent.com/AhmadAkbarID/media/main/weIcome.jpg')}` +
            `&quality=50`;

          try {
            const { data } = await axios.get(welcomeUrl, { responseType: "arraybuffer" });
            welcomeBuffer = data;
          } catch (e) {
            const { data } = await axios.get(fallbackImage, { responseType: "arraybuffer" });
            welcomeBuffer = data;
          }

          const descLine = groupDesc
            ? (groupDesc.length > 80 ? groupDesc.substring(0, 80) + '...' : groupDesc)
            : 'Belum ada deskripsi';

          const joinMethod = isActionByAdmin
            ? `➕ Ditambahkan oleh admin`
            : `🔗 Bergabung via tautan undangan`;

          const welcomeText = [
            `╔══════════════════╗`,
            `   🎉 *SELAMAT DATANG!* 🎉`,
            `╚══════════════════╝`,
            ``,
            `👋 Halo ${displayLabel} ${mentionText}!`,
            `Selamat bergabung di grup *${groupName}* 🎊`,
            ``,
            `📋 *Info Grup:*`,
            `┌─────────────────`,
            `│ 📌 Deskripsi: ${descLine}`,
            `│ 👥 Jumlah Member: *${memberCount} orang*`,
            `│ 🕐 Bergabung: *${timeStr} WIB, ${dateStr}*`,
            `│ ${joinMethod}`,
            `└─────────────────`,
            ``,
            `📜 *Peraturan Grup:*`,
            `• Hormati sesama anggota`,
            `• Dilarang spam & promosi`,
            `• Jaga kesopanan dalam bercanda`,
            `• Patuhi perintah admin`,
            ``,
            `Semoga betah & nyaman ya kak! 😊🙏`,
          ].join('\n');

          await hydro.sendMessage(anu.id, {
            text: welcomeText,
            mentions: [mentionJid],
            contextInfo: {
              externalAdReply: {
                title: `🎉 Welcome, ${canvasName}!`,
                body: `Member ke-${memberCount} di ${groupName}`,
                thumbnail: welcomeBuffer,
                sourceUrl: "https://store.hydrohost.web.id",
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          });
        }
      } else if (anu.action === 'remove' && (isleft || setting.auto_leaveMsg)) {
        const remainingCount = memberCount;
        if (isSetLeft(anu.id, set_left_db)) {
          const get_teks = await getTextSetLeft(anu.id, set_left_db);
          const replaced = get_teks
            .replace(/@user/gi, mentionText)
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc || 'Belum ada deskripsi');
          await hydro.sendMessage(anu.id, {
            image: { url: pp_user },
            caption: replaced,
            mentions: [mentionJid]
          });
        } else {
          let goodbyeBuffer;
          const canvasName = contactName || waNumber;
          const goodbyeUrl = `https://api.siputzx.my.id/api/canvas/goodbyev2?` +
            `username=${encodeURIComponent(canvasName)}` +
            `&guildName=${encodeURIComponent(groupName)}` +
            `&memberCount=${remainingCount}` +
            `&avatar=${encodeURIComponent(pp_user)}` +
            `&background=${encodeURIComponent('https://raw.githubusercontent.com/AhmadAkbarID/media/main/weIcome.jpg')}`;

          try {
            const { data } = await axios.get(goodbyeUrl, { responseType: "arraybuffer" });
            goodbyeBuffer = data;
          } catch (e) {
            const { data } = await axios.get(fallbackImage, { responseType: "arraybuffer" });
            goodbyeBuffer = data;
          }

          const leaveMethod = isActionByAdmin
            ? `🚫 Dikeluarkan oleh admin`
            : `🚪 Keluar sendiri`;

          const goodbyeText = [
            `╔══════════════════╗`,
            `   👋 *SAMPAI JUMPA!* 😢`,
            `╚══════════════════╝`,
            ``,
            `${displayLabel} ${mentionText} telah meninggalkan grup *${groupName}*`,
            ``,
            `📊 *Info Kepergian:*`,
            `┌─────────────────`,
            `│ 👥 Sisa Member: *${remainingCount} orang*`,
            `│ 🕐 Keluar: *${timeStr} WIB, ${dateStr}*`,
            `│ ${leaveMethod}`,
            `└─────────────────`,
            ``,
            `Terima kasih sudah pernah menjadi bagian`,
            `dari grup ini. Semoga sukses selalu! 🙏✨`,
            ``,
            `_Pintu selalu terbuka jika ingin kembali_ 😊`,
          ].join('\n');

          await hydro.sendMessage(anu.id, {
            text: goodbyeText,
            mentions: [mentionJid],
            contextInfo: {
              externalAdReply: {
                title: `👋 Goodbye, ${canvasName}!`,
                body: `${remainingCount} member tersisa di ${groupName}`,
                thumbnail: goodbyeBuffer,
                sourceUrl: "https://store.hydrohost.web.id",
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          });
        }
      } else if (anu.action === 'promote') {
        const tag = contactName ? `*${contactName}* ${mentionText}` : `*${waNumber}* ${mentionText}`;
        hydro.sendMessage(anu.id, {
          text: `🎖️ *PROMOSI ADMIN* 🎖️\n\nSelamat ${tag}! 🎉\nKamu telah dipromosikan menjadi *Admin* di grup *${groupName}*!\n\nGunakan jabatan ini dengan bijak ya kak 💪`,
          mentions: [mentionJid],
        });
      } else if (anu.action === 'demote') {
        const tag = contactName ? `*${contactName}* ${mentionText}` : `*${waNumber}* ${mentionText}`;
        hydro.sendMessage(anu.id, {
          text: `📉 *INFO PERUBAHAN* 📉\n\n${tag} telah dicopot dari jabatan *Admin* di grup *${groupName}*.\n\nTetap semangat ya kak! 💪`,
          mentions: [mentionJid],
        });
      }
    }

  } catch (err) {
    console.error('[Welcome Error]', err);
  }
};
