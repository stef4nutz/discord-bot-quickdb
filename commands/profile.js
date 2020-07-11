const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(bot, message, args) => {
  
  let member;
  if(args.join(' ')) member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.filter(m => m.user.username.toLowerCase().includes(args.join(' ').toLowerCase())).first()
  if(!args.join(' ') || member === undefined) member = message.member;    
    
  let varsta = db.get(`varsta_${member.user.id}`)
  if (!varsta) varsta = "It has no age set.";
  message.channel.send(member.user.tag + "'s profile\n```Name: " + member.user.tag + "\nAge: " + varsta + "```\n")
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "profile"
}
