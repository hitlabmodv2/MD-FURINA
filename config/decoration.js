
// ==========================================
// 🎨  KONFIGURASI DEKORASI & RPG
// ==========================================

global.decor = {
  menut:  '––––––『',
  menuh:  '』––––––',
  menub:  '┊☃︎ ',
  menub2: '┊',
  menuf:  '┗━═┅═━––––––๑\n',
  menua:  '',
  menus:  '☃︎',
  hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',
  htki:   '––––––『',
  htka:   '』––––––',
  haki:   '┅━━━═┅═❏',
  haka:   '❏═┅═━━━┅',
  lopr:   'Ⓟ',
  lolm:   'Ⓛ',
  htjava: '❃'
}

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    const emot = {
      level: '📊', limit: '🎫', health: '❤️', exp: '✨',
      atm: '💳', money: '💰', bank: '🏦', potion: '🥤',
      diamond: '💎', common: '📦', uncommon: '🛍️', mythic: '🎁',
      legendary: '🗃️', superior: '💼', pet: '🔖', trash: '🗑',
      armor: '🥼', sword: '⚔️',
      makanancentaur: "🥗", makanangriffin: "🥙", makanankyubi: "🍗",
      makanannaga: "🍖", makananpet: "🥩", makananphonix: "🧀",
      pickaxe: '⛏️', fishingrod: '🎣', wood: '🪵', rock: '🪨',
      string: '🕸️', horse: '🐴', cat: '🐱', dog: '🐶',
      fox: '🦊', robo: '🤖', petfood: '🍖', iron: '⛓️',
      gold: '🪙', emerald: '❇️', upgrader: '🧰',
      bibitanggur: '🌱', bibitjeruk: '🌿', bibitapel: '☘️',
      bibitmangga: '🍀', bibitpisang: '🌴',
      anggur: '🍇', jeruk: '🍊', apel: '🍎', mangga: '🥭', pisang: '🍌',
      botol: '🍾', kardus: '📦', kaleng: '🏮', plastik: '📜',
      gelas: '🧋', chip: '♋', umpan: '🪱',
      naga: "🐉", phonix: "🦅", kyubi: "🦊", griffin: "🦒",
      centaur: "🎠", skata: '🧩'
    }
    const results = Object.keys(emot)
      .map(v => [v, new RegExp(v, 'gi')])
      .filter(v => v[1].test(string))
    if (!results.length) return ''
    return emot[results[0][0]]
  }
}
