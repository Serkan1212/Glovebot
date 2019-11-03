const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setAuthor("Glove Bot <a:elmas:637681647587688448>", client.AvatarURL)
    .setAuthor("Botun Davet Linki :")
    .addField(
      "GloveBot",
      "Bot'un Davet Linki! [Tıkla](https://discordapp.com/oauth2/authorize?client_id=639861920970702911&scope=bot&permissions=805314622)"
    )
    .setFooter(`Komudu Kullanan: ${message.author.username}`)
    .setColor("RANDOM")

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "WoxeOfficial",
  usage: "davet"
};
