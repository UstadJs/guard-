const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("https://discord.gg/6jCRtpz **TESHO SINIRSIZ LİNK**")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tlink",
  description: "tag",
  usage: "tag"
};