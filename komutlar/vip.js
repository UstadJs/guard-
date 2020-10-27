const Discord = require("discord.js");
module.exports.run = async (bot, message, args, member, client, level) => {
  let user =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun!**");

  user.addRole("765519961312854037");
 
  let kayıtyetkili = '765522336417447966'
  if(!message.member.roles.has(kayıtyetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için ${kayıtyetkili} yetkisine sahip olmasınız.`);

  const ky = new Discord.RichEmbed()
    .setDescription(
      ` ${user}  **Kullanıcısına <@&765519961312854037> verildi <a:icon_vip5:767679620165140500>**`
    )
    .setColor("BLACK")
    .setTimestamp();
  message.channel.send(ky);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["wip"],
  permLevel: 0
};
exports.help = {
  name: "vip",
  description: "Birine Vip Rolü Verir",
  usage: "CS 1.6"
};