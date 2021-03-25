let handler = async (m, { conn, text }) => {
m.reply(`
Informations About Me

➠ Name : ${conn.getName(conn.user.jid)}
➠ Developer : Caliph
➠ Language : Node.js
➠ Framework : Baileys
➠ Server : Heroku
➠ Source : Nurutomo
`.trim()) // Tambah sendiri kalo mau
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i

module.exports = handler
