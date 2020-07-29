const Discord = require("discord.js");

exports.run = async(client, msg, args) => {

  let totalSeconds = (client.uptime / 1000);
  let days = ("0" + Math.floor(totalSeconds / 86400)).slice(-2);
  let hours = ("0" + Math.floor(totalSeconds / 3600)).slice(-2);
  totalSeconds %= 3600;
  let minutes = ("0" + Math.floor(totalSeconds / 60)).slice(-2);
  let seconds = ("0" + Math.floor(totalSeconds % 60)).slice(-2);
  
  
let botuptime = `${days}:${hours}:${minutes}:${seconds}`;
let botchannel = client.channels.size.toLocaleString();
let botguild = client.guilds.size.toLocaleString();
let botuser = client.users.size.toLocaleString();
let botstats = "Online";
let botapi = (client.ping).toFixed(2);
let botver = "V 1.5";
let botcreated = client.user.createdAt.toISOString().replace(/T/, ' ').replace(/\..+/, '');
let botshard = "0";
  
  
  
  
  let embed = new Discord.RichEmbed()
  .setAuthor("BronyBot - Bot Information", client.user.displayAvatarURL)
  .setColor('#FF0000')
  .addField(":arrow_forward: Status: ", `${botstats}`)
  .addField(":cyclone: Users interact: ", botuser, true)
  .addField(":white_check_mark: Server Joined: ", botguild, true)
  .addField("Channels Joined: ", botchannel, true)
  .addField("Uptime: ", `${botuptime}`, true)
  .addField("API: ", botapi, true)
  .addField("Bot Version: ", botver, true)
  .addField("Created at: ", botcreated, true)
  .addField("Shards: ", botshard, true)
  msg.channel.send(embed)
  
}
