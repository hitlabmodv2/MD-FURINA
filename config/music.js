
// ==========================================
// 🖼️  THUMBNAIL ANIME RANDOM
// ==========================================

const BASE_ANIME = 'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/'

const animeFiles = [
  '0iIJKQD.jpg',   '1005374.jpg',   '1307022.jpg',   '1358236.jpg',
  '1379424.jpg',   '1381914.jpg',   '1389069.jpg',   '1414803.jpg',
  '1490695.jpg',   '1528177.jpg',   '1581325.jpg',   '1618898.jpg',
  '1633849.jpg',   '1636127.jpg',   '1670834.jpg',   '1685247.jpg',
  '1729050.jpg',   '1744040.jpg',   '1802710.jpg',   '1810810.jpg',
  '1817984.jpg',   '1846028.jpg',   '1881012.jpg',   '1912588.jpg',
  '1953963.jpg',   '1956758.jpg',   '2017618.jpg',   '2027241.jpg',
  '2040478.jpg',   '2086562.jpg',   '2111524.jpg',   '2174300.jpg',
  '2204927.jpg',   '2221855.jpg',   '2318203.jpg',   '2349373.jpg',
  '2391574.jpg',   '2429538.jpg',   '2458014.jpg',   '2496373.jpg',
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
