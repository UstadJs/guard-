const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var tagdakiler = 0;
  let tag = "' Nᴀʀᴋᴏᴛɪᴋ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  message.channel.send("**Belirtilen Tagda" + tagdakiler + " Kişi Var!**")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tagdakilerisay","tagsay"]
};

exports.help = {
  name: 'tag-say',
  description: 'Tagdaki Kullanıcıları Sayar!',
  usage: 'Code Dawn / Kod Paylaşım'
  
  };