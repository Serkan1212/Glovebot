const { RichEmbed } = require ('discord.js')
exports.run = (client, message, args) => {
  
  var Rol = message.mentions.roles.first() || message.guild.roles.find(Rol => Rol.name === args.slice().join(' ')) || message.guild.roles.find(Rol => Rol.id === args[0])
  
  const rolYok = new RichEmbed()
  .setColor('#320000')
  .setDescription('Bir rol etiketleyiniz veya isim/ID giriniz!')
  
  const rolBulunamadı = new RichEmbed()
  .setColor('#320000')
  .setDescription('Böyle bir rol bulunamadı!')
  
  if (!message.mentions.roles.first()) if (!args[0]) message.channel.send(rolYok)
  if (message.mentions.roles.first()) {
    Rol = message.mentions.roles.first()
    const Mesaj = new RichEmbed()
    .setColor(Rol.hexColor)
    .setTitle('Rol Bilgisi:')
    .setThumbnail('https://color.dyno.gg/color/' + Rol.hexColor.replace('#', '') + '/960x960.png')
    .addField('**Rolün ismi ne?**', Rol.name, true).addField('**Rolün ID\'si ne?**', Rol.id, true)
    .addField('**Rol kaçıncı sırada?**', `Yukarıdan ${Number(message.guild.roles.size) - Number(Rol.position)}; aşağıdan ${Rol.position}. sırada.`, true).addField('**Rol etiketlenebiliyor mu?**', 'Sen bu rolün bilgisini etiketleyerek aldığına göre...', true)
    .addField('**Rolün rengi ne?**', `(Hex) ${Rol.hexColor}`, true).addField('**Rolde kaç kişi bulunuyor?**', Rol.members.size, true)
    .setFooter('Rolün Kurulma Tarihi')
    .setTimestamp(Rol.createdAt)

    message.channel.send(Mesaj)
  } else {
    if (args[0]) {
      Rol = message.guild.roles.find(Rol => Rol.id === args[0])
      if (!Rol) Rol = message.guild.roles.find(Rol => Rol.name === args.slice().join(' ')) 
      if (!Rol) message.channel.send(rolBulunamadı)
      
      var rolEtiketlenmesi = Rol.mentionable
      if (rolEtiketlenmesi == true) rolEtiketlenmesi = 'Evet'
      if (rolEtiketlenmesi == false) rolEtiketlenmesi = 'Hayır'
      
      var üyeMisin = message.member.roles.some(R => R.name === Rol.name)
      if (üyeMisin == true) üyeMisin = 'Evet.'
      if (üyeMisin == false) üyeMisin = 'Hayır.'
      
      
      const Mesaj = new RichEmbed()
      .setColor(Rol.hexColor)
      .setTitle('Rol Bilgisi:')
      .setThumbnail('https://color.dyno.gg/color/' + Rol.hexColor.replace('#', '') + '/960x960.png')
      .addField('**Rolün ismi ne?**', Rol.name, true).addField('**Rolün ID\'si ne?**', Rol.id, true)
      .addField('**Rol kaçıncı sırada?**', `Yukarıdan ${Number(message.guild.roles.size) - Number(Rol.position)}; aşağıdan ${Rol.position}. sırada.`, true).addField('**Rol etiketlenebiliyor mu?**', rolEtiketlenmesi, true)
      .addField('**Rolün rengi ne?**', `(Hex) ${Rol.hexColor}`, true).addField('**Rolde kaç kişi bulunuyor?**', Rol.members.size, true)
      .addField('**Sen bu role üye misin?**', üyeMisin, true)
      .setFooter('Rolün Kurulma Tarihi')
      .setTimestamp(Rol.createdAt)
      if (Rol) message.channel.send(Mesaj)
    }
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolbilgi'],
  permLevel: 0
}

exports.help = {
  name: 'rol-bilgi'
}
   