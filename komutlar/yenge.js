const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("**Yengenizle uğraşmayın banlarım <a:9_:769281410569207808> <@!762379095002185729> <a:752787982997520477:768889301328592927> <@!445684878298841099>**")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yengemiz"],
  permLevel: 0
};

exports.help = {
  name: "yenge",
  description: "tag",
  usage: "tag"
};