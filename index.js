const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = 'y!';
const ytdl = require("ytdl-core");
const db = require('quick.db');
const queue = new Map();
const fs = require("fs");
const { Util, RichEmbed } = require("discord.js");

client.on('ready', () => {
  console.log("Ready!");
  client.user.setStatus('online'); // Coloque 'online', 'idle', 'dnd', ou 'invisible'
  client.user.setActivity("y!help", { type: "STREAMING", url: "https://www.twitch.tv/ygorxzx7" });
});



client.on('message', async msg => {  //código feito por ygor.
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  if(!msg.content.startsWith(prefix)) return;
  var args = msg.content.slice(prefix.length).trim().split(' ');
  var messageArray = msg.content.split(" ");
  var searchString = messageArray.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  console.log(searchString);
  var serverQueue = queue.get(msg.guild.id);
  var sender = msg.author;
  var cmd = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, msg, args);
    
  } catch (e) {
    console.log(e.stack);
  } finally {
    console.log(`${msg.author.tag} has using ${cmd}'s command`);
  }
  
});


client.login(process.env.BOT_TOKEN);


