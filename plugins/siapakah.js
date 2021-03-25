let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants, args }) => {
  let users = participants.map(u => u.jid)
  iduser = await users[Math.floor(Math.random() * users.length)]
  pertanyaan = `pertanyaan : ${text}\n\nTag : @${iduser.split('@')[0]}`
  conn.reply(m.chat, pertanyaan, m, { contextInfo: { mentionedJid: [iduser] } })
}
handler.help = ['siapa <teks>','siapakah <teks>']
handler.tags = ['group']
handler.command = /^(siapakah|siapa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = falss

module.exports = handler

