
// ==========================================
// 🎵  KONFIGURASI MUSIK & THUMBNAIL
// ==========================================

// Daftar gambar anime random (dari GitHub & waifu.pics)
global.thumbnailList = [
  // === Asthetic/AnimeBackgrounds ===
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/0iIJKQD.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1005374.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1307022.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1358236.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1379424.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1381914.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1389069.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1414803.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1490695.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1528177.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1581325.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1618898.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1633849.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1636127.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1670834.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1685247.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1729050.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1744040.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1802710.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1810810.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1817984.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1846028.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1881012.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1912588.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1953963.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/1956758.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2017618.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2027241.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2040478.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2086562.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2111524.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2174300.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2204927.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2221855.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2318203.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2349373.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2391574.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2429538.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2458014.jpg',
  'https://raw.githubusercontent.com/Asthetic/AnimeBackgrounds/master/2496373.jpg',

  // === ThePrimeagen/anime ===
  'https://raw.githubusercontent.com/ThePrimeagen/anime/master/hatsune.jpg',
  'https://raw.githubusercontent.com/ThePrimeagen/anime/master/catumbrella.jpg',

  // === AhmadAkbarID/media (original) ===
  'https://raw.githubusercontent.com/AhmadAkbarID/media/refs/heads/main/menu.jpg',
]

// Thumbnail random — setiap akses global.thumbnail, gambar berganti otomatis
Object.defineProperty(global, 'thumbnail', {
  get: () => global.thumbnailList[Math.floor(Math.random() * global.thumbnailList.length)],
  configurable: true,
  enumerable: true
})

// ==========================================
// 🎵  DAFTAR MUSIK RANDOM
// ==========================================

global.musicList = [
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/MenuYuki.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/summertime.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/yowaimo.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/nande-nande.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/yamete.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/karna-lo-wibu.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/to-the-bone.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/menuasli.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/beat-box2.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/bidadari.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/ku-coba.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/gitar.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/hampa.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/dengan-mu.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/bahagia-aku.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/audio/pak-sapardi.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound1.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound2.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound3.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound5.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound6.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound7.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound8.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound10.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound11.mp3',
  'https://github.com/FahriAdison/Base-Sound/raw/main/sound/sound12.mp3',
]

Object.defineProperty(global, 'music', {
  get: () => global.musicList[Math.floor(Math.random() * global.musicList.length)],
  configurable: true,
  enumerable: true
})
