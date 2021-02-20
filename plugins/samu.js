let handler = async m => m.reply(`
  ^    ^    ^    ^    ^  
 /S\  /m\  /3\  /3\  /0\ 
<___><___><___><___><___>
                                        
`.trim()) 
handler.help = ['samu']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
