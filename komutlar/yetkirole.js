const Discord = require("discord.js");
module.exports.run = async (bot, message, args, member, client, level) => {
  let user =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun!**");

  user.addRole("765547450609565708");
  user.addRole("765522196469645312");
  user.addRole("765522336417447966");
  user.AddRole("765522376963915786");
  
  let kayıtyetkili = '765521727065030706'
  if(!message.member.roles.has(kayıtyetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için ${kayıtyetkili} yetkisine sahip olmasınız.`);

  const ky = new Discord.RichEmbed()
    .setDescription(
      ` ${user} Artık sunucu da **YETKİLİSİN**`
    )
    .setColor("BLACK")
    .setTimestamp();
  message.channel.send(ky);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetki-ver"],
  permLevel: 0
};
exports.help = {
  name: "yetki",
  description: "Birine Vip Rolü Verir",
  usage: "CS 1.6"
};