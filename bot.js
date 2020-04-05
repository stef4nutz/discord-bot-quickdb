const Discord = require("discord.js");
const client = new Discord.Client();
var token = "YOURTOKEN"; // your token, if you use glitch make sure you remove this code and use the steps.
var prefixbot = "!"; // edit your prefix

const discord_token = token;
const prefix = prefixbot;

client.on('ready', () => {
    console.log("connected to discord");
    client.user.setStatus('available') // 3 type's: available, dnd, idle
    client.user.setPresence({
        game: {
            name: 'github.com/sharoskyy',
            type: "STREAMING", // there's 4 type's. STREAMING / ONLINE / LISTENING / WATCHING
            url: "https://www.twitch.tv/sharoskyxd" // introduce a real twitch.tv channel for purple background
        }
    });
});
// welcome & goodbye + mention text.
client.on("message", message => {
  if(message.isMentioned(client.user)) {
     message.channel.send("Hello! I've seen you are lost, use !help.")
  }
});
client.on('guildMemberAdd', member => {
    member.guild.channels.get('678642604258361344').send("**" + member.user.tag + " `(" + member.id + ")`** just joined the server. Welcome!");
});
client.on('guildMemberRemove', member => {
    member.guild.channels.get('678636672778502175').send("**" + member.user.tag + " `(" + member.id + ")`** just left the server. Goodbye!");
});


client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
    // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});
// ONLY FOR PEOPLE THAT USE GLITCH.COM
// instead of using discord_token use procces.env.TOKEN and in your .env file put TOKEN=token
client.login(discord_token);
