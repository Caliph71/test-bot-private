let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  F = await this.sendContact(m.chat, owner[0], m.getName(owner[0]), m)
  this.reply(m.chat, 'Ini Nomor Owner Ku, Jangan lupa Di save ya >/<', F)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
