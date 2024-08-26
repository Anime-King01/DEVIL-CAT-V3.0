//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: @No-Name-Tech" //ur yt chanel name
global.socialm = "GitHub: Anime-King01" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = '𝕯𝖊𝖛𝖎𝖑 𝕮𝖆𝖙 𝓥3' //ur bot name
global.ownernumber = ['2348133286181'] //ur owner number, dont add more than one
global.ownername = '𝕷𝖔𝖗𝖉 𝕹𝖔 𝕹𝖆𝖒𝖊' //ur owner name
global.websitex = "https://youtu.be/tLq8_qOOGFI"
global.wagc = "https://whatsapp.com/channel/0029VadIfkvFSAt7RRohyF0t"
global.themeemoji = '🪀'
global.wm = "No Name Tech Inc."
global.botscript = 'https://github.com/Anime-King01/DEVIL-CAT-V3.0' //script link
global.packname = "Sticker By"
global.author = "𝕯𝖊𝖛𝖎𝖑 𝕮𝖆𝖙 𝓥3\n\n+2348133286181"
global.creator = "2348133286181@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348133286181"] // Premium User

//channel id
global.xchannel = {
	jid: '120363222395675670@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '234,254,27' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});