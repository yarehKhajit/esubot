let handler = function (m) {
  this.sendContact(m.chat, '+525551944687', 'yarehOwO', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
