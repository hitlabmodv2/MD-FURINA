
// ==========================================
// 🖼️  KONFIGURASI MEDIA & FILE
// ==========================================

const fs = require('fs')

// Gambar default bot
global.thum         = fs.readFileSync("./data/image/thumb.jpg")
global.log0         = fs.readFileSync("./data/image/thumb.jpg")
global.err4r        = fs.readFileSync("./data/image/thumb.jpg")
global.thumb        = fs.readFileSync("./data/image/thumb.jpg")
global.defaultpp    = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

// Flaming Text / Menu image maker
global.flaming  = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming  = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun   = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

// 🖼️ Thumbnail menu (tetap 1 gambar, tidak random)
global.thumbnail = 'https://raw.githubusercontent.com/AhmadAkbarID/media/refs/heads/main/menu.jpg'

// Tipe dokumen
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
