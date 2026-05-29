// ================================
// SIMPLE PING
// © JOEN-MEHAR007
// ================================

const { cmd } = require('../command');

cmd({
pattern: "ping",
alias: ["pong"],
desc: "Simple Ping",
category: "main"
},
async (conn, mek, m, { from }) => {
    try {
        const start = Date.now();
        await conn.sendMessage(from, { text: "Ping!" }, { quoted: m });
        const end = Date.now();
        
        await conn.sendMessage(from, { 
            text: `> ☞ Pong ${end - start}ms

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ JOEN-MEHAR007`
        }, { quoted: m });
        
    } catch (e) {
        console.log(e);
    }
});
