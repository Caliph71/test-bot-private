let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants, args }) => {
  let users = participants.map(u => u.jid)
 teks = (args.length > 1) ? args.join(' ').trim() : ''
 teks += `  Total : ${users.length}\n`
	for (let mem of users) {
	teks += `╠➥ @${mem.split('@')[0]}\n`
		}
		
  conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: users } })
}
handler.help = ['tagall','everyone']
handler.tags = ['group']
handler.command = /^(tagall|everyone)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

