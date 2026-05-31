const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FyQ0QwaWUyL1FyVERyYndvU2dnNnJDREhKbTd3ay9tSEIrN1lDc2Rsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ljbkRVQWFlQTExZ0dtKy9adTVDK2wrQVhtWTRCMU0xWFAvOG5Fck1FMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUEY1SGczdkt0WWZyTHRXYlE5UFRPeCsxM2dZZWpmRG00L3VLZGw3Q2w0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKNFlJdUxUWGpWOStxMHEvZUJqR21IQXFBUm9HazE2di82cXlwWGpYWWhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFUFBOUEwrMVhQNEY1VXdsd1AzZjNyZ25GUm5Yc0FKcms4VVgrUTNMRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMvYmFKZGZJMHltbjlSZTlkZGg4czNxcVp2ZUJLTi9nSWVOUGNpNTdFV289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdFOVphQnhxOWZKMWljSVYrLzlpZHh6L0RCeGlRMSthSk0rVEtMMG5tST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkhWYVB2MUNSRERub09iNVlESGVobWd3dUpCMmR4OWkxQ3hxWnp5cVNtVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit2bUFvdVJQdDA4bWNmelZUYU5QUUovSENwUHVOeVpVOHJQL3A3TDZIME5UQW1FY2RlRHluS3laaHFDR3IweDV0VmNhalNBbmYvUU1POTdmcjVLZGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6ImdtNk5HNHhUK2dMdkVhYTZQNXl0TUd3N1JsZXU4YmhFcVZxWVV3dEtTRUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiR0dQS1NLODYiLCJtZSI6eyJpZCI6IjkyMzQzMDkyMTcxMzozNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJqb2VuIEhhZGkiLCJsaWQiOiIxNjg4ODc0NDIyMTkwMzg6MzVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT2E1ZllFRVBMWTc5QUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkL0NQVWF2NmQ3YlB0UmV5YURlcWk2MUkvcGNjSEdnaTVlT3QrWDNrdFVJPSIsImFjY291bnRTaWduYXR1cmUiOiJydU94L3dFalZlYzRWYUdQRmowL1hHbGNIQU5SVURLVFc1dW43cWxOUjE0NldlcWtYMXRhenZTY3pLUE01VEc1TTRGalFWR2Y3MlJ2TUNSTVhucGtBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN2VhL2RmaytrNDd3bWdpUFdmaytMYjNHc1NvY0JwcGVKZG9PakdWYy9qdTNXNDdHRlNzWlUrbjBQNTU4b1E3cE5kckdFTzc2bUZUeFBOZUVadUwwamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjg4ODc0NDIyMTkwMzg6MzVAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhmd2oxR3IrbmUyejdVWHNtZzNxb3V0U1A2WEhCeG9JdVhqcmZsOTVMVkMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MDIxNDkwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHMkIifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚂𝙴𝙴𝙽 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝚈 JOEN-MEHAR007 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://eliteprotech-url.zone.id/1780041359081m6jlml.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "JOEN-MEHAR007",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "JOEN-MEHAR007",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923303030400",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "JOEN-MEHAR007",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ JOEN-MEHAR007 ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚉𝙸𝙽𝙳𝙰 𝙷𝚄𝙽 𝚈𝙰𝚁 🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923303030400",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
