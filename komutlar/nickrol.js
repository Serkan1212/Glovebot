const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix


const db = require("quick.db")
exports.run = async (client, message, args) => {



  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`:warning: Lütfen bir kullanıcı giriniz! \nDoğru Kullanım; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(!isim) return message.reply(`:warning: Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(isim.length > 32) return message.reply(`:warning: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.get(kullanici.id).setNickname(`${isim}`)
  message.react("🔑")
  if(!message.member.roles.has("komutu kullanbilecek yetkili idsi")) return message.channel.send(`Bu komutu kullanabilmek için \`''\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('verilecekrol')
  member.removeRole('alınacak rol')
  member.removeRole('alınacak rol')
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
    .addField(`Kayıt işlemi başarılı`, `**Kayıt edilen kullanıcı :* ${kullanıcı} \n*Kayıt işleminde verilen rol :* \`'rol ismi'\``)///rolü etiketlemesini istiyorsanız <@&rolid>
  .addField(`\n*Kullanıcı adı \`${isim}\olarak değiştirildi`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(embed)
  message.react("✅")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegistir'],
    permLevel: 0
}
exports.help = {
  name: 'erkeki',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'erkek isim yaş'
}