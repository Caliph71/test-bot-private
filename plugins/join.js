let handler = async (m, { conn, args }) => {
  if (args.length == 0) return m.reply('Linknya mana kak')
  pe = await conn.joinvialink(args.join(' ').replace('https://chat.whatsapp.com/', ''))
  if (!pe) return m.reply('Invalid invite link')
  conn.reply(pe.gid `Hello i am Bot, I was invited by ${conn.getName(m.sender)}`, false)

}
handler.help = ['join (link grup)']
handler.tags = ['main']
handler.command = /^join$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

