let handler = async (m, { conn, args }) => {
  if (args.length == 0) m.reply('Linknya mana kak')
  pe = await conn.joinvialink(args.join(' '))
  conn.reply(pe.gid `Hello i am Bot, I was invited by ${conn.getName(m.sender)}`, false)

}
handler.help = ['join (link grup)']
handler.tags = ['admin']
handler.command = /^join$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.fail = null

module.exports = handler

