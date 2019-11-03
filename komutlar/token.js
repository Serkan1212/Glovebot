const Discord = require('discord.js')
exports.run = (client, message) => {

  const Mesaj = new Discord.RichEmbed()
    .setColor('#000000')
    .setImage('https://media1.giphy.com/media/29HRejgahYenVsohB5/source.gif')
    
  message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'token'
}