const { MessageType } = require('@adiwajshing/baileys')
const { toVideo } = require('../lib/converter')
let handler  = async (m, { conn, args }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
      let img = await q.download()
      convert = await toVideo(img, 'webp')
}
handler.help = ['tovideo (reply stiker)']
handler.tags = ['sticker']
handler.command = /^tovideo?$/i

module.exports = handler

