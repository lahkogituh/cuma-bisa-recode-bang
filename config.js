// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to King Of Bear Official
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/IaBfUDbpESuDMr19WhIbvp'
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/IaBfUDbpESuDMr19WhIbvp', ''] // ganti jadi group lu
global.owner = ['6285719116912'] // Put your number here //owner eval
global.kontak = ['6285719116912'] //Ketika ada yang ngetik #owner
global.mods = ['6285719116912'] // Want some help?
global.prems = ['6285719116912'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'FuzBot1',
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'twBHoFu3AnqfE6f2rwAuirfTVgh',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear.herokuapp.com': 'buy',
  'https://apikey-bear2.herokuapp.com': 'buy',
  'https://apikey-bear3.herokuapp.com': 'buy',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'Deffbotz'
zekskey = 'twBHoFu3AnqfE6f2rwAuirfTVgh'
xteamkey = 'FuzBot1'
leyskey = 'dappakntlll'
bearkey = 'buy'

//xteam        MIMINETBOT
namaig = https://instagram.com/andii'
namagithub = 'https://github.com/andii'
kasihcaption = `[]❕[] Done`
namakontak1 = '❥ࣲ፝֟͜͡◔⃟➣ ᴘʀɪᴠᴀᴛᴇ 𝕭𝕯ᴮᴷᴾ ㊧'
namakontak2 = '❥ࣲ፝֟͜͡◔⃟➣ ᴘʀɪᴠᴀᴛᴇ 𝕭𝕯ᴮᴷᴾ ㊧'
namakontak3 = '❥ࣲ፝֟͜͡◔⃟➣ ᴘʀɪᴠᴀᴛᴇ 𝕭𝕯ᴮᴷᴾ ㊧'

//kasihcaption = `[]❕[] Done`

// Sticker WM
global.stiker_wait = '[]❗[] Sabar Lagi Proses Bwang...!'
global.packname = '𝕭𝖔𝖙 • Andii ༢࿔ྀ'
global.author = 'wa.me/6285719116912'
global.email = 'asedekmtl@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '𝕭𝖔𝖙 • Andii ༢࿔ྀ'
global.media = 'https://i.top4top.io/p_2236p05ee5.jpg'

//yyy
bc = '𝕭𝖔𝖙 • Andii ༢࿔ྀ' //mcx Broadcast
footer = '\n𝕭𝖔𝖙 • Andii ༢࿔ྀ'
namabot = '𝕭𝖔𝖙 • Andii ༢࿔ྀ'
namalu = 'Andii ༢࿔ྀ'


// 
wait = '[]❗[] Sabar Lagi Proses Kmtl...!'
global.wait = '[]❗[] Sabar Lagi Proses Kmtl...!'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
