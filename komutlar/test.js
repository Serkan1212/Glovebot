exports.run = function(client, message, args) {
        message.channel.send("Discord Sunucumuz : discord.gg/HutvDJP");
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tst"],
  permLevel: 0
};

module.exports.help = {
  name: 'test',
  description: '',
  usage: 'test'
};