const Discord = require("discord.js");
const fs = require("fs");
exports.run = async (client, message, args) => {
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  message.channel.send(`**${files.length}** komut bulunmakta.`);

});

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "komutsayısı",
  description: "Ping komut sayısı kodu.",
  usage: "Ping komutları saydı"
};