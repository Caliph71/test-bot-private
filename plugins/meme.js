let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.herokuapp.com/api/random/meme?apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, `meme.${json.result.url.split('.')[1]}`, `${json.result.title}`, m, false)
}
handler.help = ['meme']
handler.tags = ['nulis']

handler.command = /^(meme)$/i

module.exports = handler
