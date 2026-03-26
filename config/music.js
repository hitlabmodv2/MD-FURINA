
// ==========================================
// 🖼️  THUMBNAIL ANIME RANDOM
// ==========================================

const _thumbFallback = 'https://i.ibb.co/TqWTGXVM/474091701-979544940732791-1475207296815939677-n.jpg'

let _cachedThumb = _thumbFallback

async function _refreshThumb() {
  try {
    const res = await fetch('https://api.waifu.pics/sfw/waifu', {
      signal: AbortSignal.timeout(5000)
    })
    const json = await res.json()
    if (json && json.url) _cachedThumb = json.url
  } catch {
    // tetap pakai cache lama, tidak error
  }
}

_refreshThumb()
setInterval(_refreshThumb, 3 * 60 * 1000)

Object.defineProperty(global, 'thumbnail', {
  get: () => _cachedThumb,
  configurable: true,
  enumerable: true
})

// ==========================================
// 🎵  MUSIK RANDOM
// ==========================================

const BASE_AUDIO = 'https://cdn.jsdelivr.net/gh/FahriAdison/Base-Sound@main/'

global.musicList = [
  BASE_AUDIO + 'audio/MenuYuki.mp3',
  BASE_AUDIO + 'audio/summertime.mp3',
  BASE_AUDIO + 'audio/yowaimo.mp3',
  BASE_AUDIO + 'audio/nande-nande.mp3',
  BASE_AUDIO + 'audio/yamete.mp3',
  BASE_AUDIO + 'audio/karna-lo-wibu.mp3',
  BASE_AUDIO + 'audio/to-the-bone.mp3',
  BASE_AUDIO + 'audio/menuasli.mp3',
  BASE_AUDIO + 'audio/beat-box2.mp3',
  BASE_AUDIO + 'audio/bidadari.mp3',
  BASE_AUDIO + 'audio/ku-coba.mp3',
  BASE_AUDIO + 'audio/gitar.mp3',
  BASE_AUDIO + 'audio/hampa.mp3',
  BASE_AUDIO + 'audio/dengan-mu.mp3',
  BASE_AUDIO + 'audio/bahagia-aku.mp3',
  BASE_AUDIO + 'audio/pak-sapardi.mp3',
  BASE_AUDIO + 'sound/sound1.mp3',
  BASE_AUDIO + 'sound/sound2.mp3',
  BASE_AUDIO + 'sound/sound3.mp3',
  BASE_AUDIO + 'sound/sound5.mp3',
  BASE_AUDIO + 'sound/sound6.mp3',
  BASE_AUDIO + 'sound/sound7.mp3',
  BASE_AUDIO + 'sound/sound8.mp3',
  BASE_AUDIO + 'sound/sound10.mp3',
  BASE_AUDIO + 'sound/sound11.mp3',
  BASE_AUDIO + 'sound/sound12.mp3',
]

Object.defineProperty(global, 'music', {
  get: () => global.musicList[Math.floor(Math.random() * global.musicList.length)],
  configurable: true,
  enumerable: true
})
