
// ==========================================
// 🖼️  THUMBNAIL ANIME RANDOM
// ==========================================

const BASE_ANIME = 'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/'

// Semua file di bawah sudah diverifikasi ada di repo (no 404)
const animeFiles = [
  '0iIJKQD.jpg',          '0RV5iHG.png',          '0ZkpCE0.png',
  '0bYF4pa.png',          '0icGBWS.png',           '1004724.png',
  '1005374.jpg',          '115364036.jpg',          '12ro2yt.jpg',
  '1307022.jpg',          '1334629815151.jpg',      '1384223872058.jpg',
  '1392086843219.jpg',    '1392090149023.jpg',      '1397691544922.jpg',
  '1397691610941.jpg',    '1397700480474.jpg',      '1397716997927.jpg',
  '1397717273533.jpg',    '1397822926255.jpg',      '1435252821312.jpg',
  '1437212783083.jpg',    '1446264470612.jpg',      '1453663569229.jpg',
  '177264.jpg',           '177343.jpg',             '1PzuHbt.jpg',
  '1en4Ty8.png',          '1kFKNj2.png',            '1mIA3Jf.png',
  '1wIXARH.png',          '203.jpg',                '08tcen8w74y11.png',
  '20151129022206617.jpg','20151129022208fbe.jpg',  '1920x1200_285.jpg',
  '14f6s.jpg',            '148oe.png',              '154ov.png',
  '114442-plastic-memories-plastic-memories.jpg',
]

global.thumbnailList = [
  ...animeFiles.map(f => BASE_ANIME + f),
  'https://raw.githubusercontent.com/ThePrimeagen/anime/master/hatsune.jpg',
  'https://raw.githubusercontent.com/ThePrimeagen/anime/master/catumbrella.jpg',
  'https://raw.githubusercontent.com/AhmadAkbarID/media/refs/heads/main/menu.jpg',
]

// Setiap akses global.thumbnail → gambar anime random berganti otomatis
Object.defineProperty(global, 'thumbnail', {
  get: () => global.thumbnailList[Math.floor(Math.random() * global.thumbnailList.length)],
  configurable: true,
  enumerable: true
})

// ==========================================
// 🎵  MUSIK RANDOM
// ==========================================

const BASE_AUDIO = 'https://github.com/FahriAdison/Base-Sound/raw/main/'

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
