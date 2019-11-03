const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "505814454550921226") {
        
        message.channel.send(':1234: **BOTUN ISMIBotu için gerekli şeyler kuruluyor...**');
        
       message.guild.createRole({ name: 'Kurucu', position: 50, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
       
      message.guild.createRole({ name: 'Yetkili', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
      
      message.guild.createRole({ name: 'Admin', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
        
      message.guild.createRole({ name: 'Üye', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'GREEN'})
      
      message.guild.createRole({ name: 'Kayıtsız Üye', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'RED'})
        
     message.guild.createRole({ name: 'BOT', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})         
        
        message.channel.send(':white_check_mark: **Roller Kuruldu**');
        
    } else {
      message.channel.send('<a:hayr:640207120603545620>  **Üzgünüm ama bu komut Bot sahibine aittir.**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'rol-oluştur',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'roller'
  };