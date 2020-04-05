const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(bot, message, args) => {
  let member = message.member;
  

  // male - female
  if(args[0] == 'Male') {
     db.fetch(`gender_${member.user.id}`)
     db.set(`gender_${member.user.id}`, false)
    message.channel.send("Succesfully you're now `Male`")
  } else if(args[0] == 'Female') {
    db.fetch(`gender_${member.user.id}`)
     db.set(`gender_${member.user.id}`, true)
    message.channel.send("Succesfully you're now `Female`")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "setgender"
}
