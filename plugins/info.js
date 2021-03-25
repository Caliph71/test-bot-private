let handler = async m => m.reply(`
Informations About Me

➠ Name : ${this.user.name}
➠ Developer : Caliph
➠ Language : Node.js
➠ Framework : Baileys
➠ Server : Heroku
`.trim()) // Tambah sendiri kalo mau
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i

module.exports = handler
