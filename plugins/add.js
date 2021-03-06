let handler = async (m, { conn, args }) => {
  let users = args.join` `.split`,`.map(v => v.replace(/\D/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  conn.groupAdd(m.chat, users)
}
handler.help = ['add', '+'].map(v => '' + v + ' @user')
handler.command = [/^(add|\+)$/i]
handler.tags = ['admin']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
