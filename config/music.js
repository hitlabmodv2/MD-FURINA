
// ==========================================
// 🎵  KONFIGURASI MUSIK & THUMBNAIL
// ==========================================

global.thumbnail = 'https://raw.githubusercontent.com/AhmadAkbarID/media/refs/heads/main/menu.jpg'

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
