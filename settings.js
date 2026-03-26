const chalk = require("chalk")
const fs    = require("fs")

// ==========================================
// ⚙️  AUTO PRESENCE
// ==========================================
global.autoTyping       = false  // auto typing di gc
global.autoRecord       = false  // auto recording
global.autoblockmorroco = false  // auto block 212
global.wlcm             = false
global.autokickmorroco  = false  // auto kick 212
global.antispam         = false  // auto kick spammer
global.autosahur        = false  // auto sahur

// ==========================================
// 📁  LOAD KONFIGURASI DARI FOLDER CONFIG/
// ==========================================
require('./config/bot')         // Info bot, owner, prefix, payment
require('./config/music')       // Thumbnail & music list
require('./config/api')         // API keys (nz, frch, openai, supa, otp)
require('./config/panel')       // Panel server settings
require('./config/messages')    // Pesan-pesan bot (mess)
require('./config/decoration')  // Dekorasi & RPG emoticon
require('./config/media')       // File gambar & tipe dokumen

// ==========================================
// 🔄  AUTO RELOAD SETTINGS (HOT RELOAD)
// ==========================================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update '${__filename}'`))
  delete require.cache[file]
  require(file)
})
