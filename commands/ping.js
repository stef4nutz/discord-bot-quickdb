const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
 message.channel.send(`\:ping_pong: My ping is ${Math.round(bot.ping)}ms`)
};
