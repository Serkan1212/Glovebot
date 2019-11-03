const Discord = require('discord.js');

exports.run = function(client, message, args) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Admin yetkisinde değilsiniz!")
  let pingUnban= args[0]
  let pingSebep = args.slice(1).join(" ")
 if(!pingUnban) return message.channel.send(":x: Dostum kimin **ban**ını açacağım?")
 if(!pingSebep) return message.channel.send(":x: **Sebebi** unuttun herhalde?");
message.channel.send(`\`${pingUnban}\` **ID**'li kullanıcının banı açıldı.\n**[SEBEP: ${pingSebep}]**`);
message.guild.unban(pingUnban,`Yetkili: ${message.author.tag} / Sebep: ` + pingSebep);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'pingwashere',
  usage: 'unban'
  
};