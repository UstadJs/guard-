const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
 
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("Nᴀʀᴋᴏᴛɪᴋ",`= BOT İNFO =

${prefix}vip            ::  Özel üyelere verilir.!
${prefix}say            ::  Sunucu daki boost, üye, ses kanalını sayar.
${prefix}uyar           ::  Kullanıcıyı özelden uyarır.!
${prefix}jail           ::  Kullanıcıyı cezalıya gönderir süreli süresiz.
${prefix}link           ::  Sunucunun özel link verir.

# Komutlar hakkında yardım almak icin ${prefix}yardım <komut ismi>`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('Nᴀʀᴋᴏᴛɪᴋ', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};