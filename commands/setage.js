const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(bot, message, args) => {
let member = message.member;
let number = parseInt(args[0])
  const varsta = number
  if(!varsta || varsta < 13 || varsta > 120) return message.channel.send("Minimum age is 13 years and maximum 120 years.");
  db.set(`varsta_${member.user.id}`, varsta);
  message.channel.send("Good news, your virtual age is now `" + varsta + "`")
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "setage"
}
