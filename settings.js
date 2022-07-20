//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivelogo = 'https://user-images.githubusercontent.com/108208262/179673634-0f3a4d98-4ba5-4656-84af-eacb8d69e938.jpg' //Costomize Alive logo
global.alivemsg = `▬▬▬▬▬▬▬▬
🧞‍♂️ 𝐇𝐈 𝐇𝐈    𝐁𝐎𝐓 🧞‍♂️
𝐎𝐍𝐋𝐈𝐍𝐄    𝐍𝐎𝐖 
      𝐬𝐮𝐦𝐢 𝐛𝐨𝐭.
▬▬▬▬▬▬▬▬


☞  𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 𝙸𝚂 𝙰 𝚜𝚞𝚖𝚒 ◈𝚊𝚕𝚙𝚑𝚊 ⛥
▬▬▬▬▬▬▬▬▬

♚➪  𝚋𝚘𝚝 𝚘𝚠𝚗𝚎𝚛 𝚒𝚜 𝚊 http://wa.me/+94742427578?text=.HI☺OWNER 

🧞‍♂ 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺 𝙸𝚂 𝙰 ➢ https://chat.whatsapp.com/LLbFBtwJj4rFlKm7bAbPME ⦁⦁⦁⦁⦁🧚‍♀

🧛‍♂️𝐨𝐰𝐧𝐞𝐫      ❬𝐦𝐬 𝐌𝐮𝐭𝐡𝐮 /𝐦𝐫 𝐁𝐡𝐮𝐬𝐡𝐢𝐭𝐡𝐚❭
 
 🐈github = https://github.com/botimam/Red-Dragon.git


🧞‍♂ 𝙹𝙾𝙸𝙽 𝚃𝙷𝙰 𝙶𝚁𝙾𝚄𝙿 

🧞‍♂ 𝚂𝙷𝙰𝚁𝙴 𝚃𝙷𝙰𝙴 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺 ▰▰▰▰➤

🧞‍♂ ➤    𝙱𝙾𝚃   𝚃𝙸𝙺𝚃𝙾𝙺  𝙿𝙰𝙶𝙴  tiktok.com/@sumi_alfa_ff 

🧞‍♂️♚ 𝙵𝙾𝙻𝙻𝙾𝚆 𝚖𝚎𝚎 ▰▰ 𝙿𝙻𝚉 ▱▱▱🧛‍♂️

 🧞‍♂ 𝐀𝐋𝐋 𝐂𝐎𝐌𝐌𝐃𝐄 ➳ .𝚖𝚎𝚗𝚞 🔮


🔮 𝐛𝐨𝐭 𝐨𝐧𝐥𝐢𝐧𝐞 𝐭𝐞𝐱𝐭 𝐦𝐚𝐬𝐬𝐞𝐠𝐞     ❬.𝚊𝚕𝚒𝚟𝚎❭

🧞‍♂ 𝚂𝚄𝙼𝙸 𝙱𝙾𝚃 🧞‍♂️

▂▂▂▂▂▂▂▂▂▂▂▂
▂▂▂▂▂▂▂▂▂▂▂▂

●▰▰▼▰▰♫
            ➹
             ➹ 

◆ ☞𝙶𝚁𝙾𝚄𝙿 𝙽𝙰𝙼𝙴 ❴𝚂𝚄𝙼𝙸 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿❵

◆ ☞𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 𝙾𝚆𝙽𝙴𝚁 ♕ https://wa.me/+94742427578☚

◆ ☞ 𝙶𝚁𝙾𝚄𝙿 𝙱𝙾𝚃 ♕ https://wa.me/+94742427578☚

◆ ☞𝙱𝙾𝚃 𝙷𝙴𝚁𝙾𝙺𝚄 ⛃ 𝙳𝙴𝙿𝙻𝙾𝚈 𝚆𝙴𝙱𝚂𝙸𝚃𝙴 ❴𝙽𝙰𝙼𝙴 𝚀𝚄𝙴𝙽𝙽 𝙰𝙼𝙳𝙸❵

◆ ☞  𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 ☤ ❴𝚂𝚄𝙼𝙸 𝙱𝙾𝚃❵

◆ ☞ ☤ 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺 ❴https://chat.whatsapp.com/LLbFBtwJj4rFlKm7bAbPME  ❵ 

◆ ☞ 𝚃𝙸𝙺𝚃𝙾𝙺 𝙿𝙰𝙶𝙴 𝚕𝚒𝚗𝚔 𝚕𝚒𝚔𝚎 𝚊𝚗𝚍 𝚏𝚘𝚕𝚕𝚘𝚠 𝚖𝚎𝚎 http://tiktok.com/@sumi_alfa_ff ☚ ☤

▲▭▭▭▭▭▲
●___JOIN THE GROUP PLZ ____●
●Owner name is ●BHUSHITHA ■💻` //Costomize Alive Message (type your message in `` )

global.owner = ['94742427578'] //Owner number in aive msg
global.premium = ['94742427578'] //Owner Number info
global.ownernomer = '94742427578' //Owner Number <<<
global.ownernumber = ["94767761566"],//Owner Number 
global.react = ["👨‍💻"] //React in Owner Message  


global.ownername = '😎BHUSHITHA' //Owner Name
global.botname = 'SUMI ALPHA' //Bot Name

global.button = '🌍WEBSITE 🌍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://github.com/botimam/Red-Dragon.git' //Change Yout Button's URL

global.button = '☰ WHTSAPPIS GRUP ☰' //Costomize B Button Name In Alive Message
global.btnurl = 'https://chat.whatsapp.com/LLbFBtwJj4rFlKm7bAbPME' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = 'SUMIALPHA' //Bot Pacage Name
global.author = '😎SUMI ALPHA❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '👻' // Menu emoji
global.footer = '©_Bhushitha.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    Ownermessage : '👨‍💻'
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
