let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {

        switch(args[0]) {
        case 'open':
         await conn.updatePresence(m.chat, Presence.composing)
         await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
         m.reply('```Sukses Membuka Grup```)
         break
         case 'close':
         await conn.updatePresence(m.chat, Presence.composing)
         await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
         m.reply('```Sukses Menutup Grup```)
         break
         default: 
        m.reply(`*Format salah! Contoh :*

  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
`.trim())
      }
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group||grup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
