const Discord = require('discord.js');

exports.run = (client, message, args) => {
let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let reason = args.slice(1).join(' ');
  
if(!target) return message.channel.send("**você precisar especificar o usuario que quer banir**");
if(!reason) return message.channel.send("**e a razão do kick? jumento?**");
if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(":monkey: **SAI MACACO, N TEM PERMISSÃO KRL**");
if(message.author.id === target.id) return message.channel.send("<:WrongMark:524375774741135362> That's suicide man, i can't do that!");
if(target.highestRole.position >= message.member.highestRole.position) { return message.channel.send("**Você acha que pode kikar uma pessoa superior a você?**"); }
if(!target.kickable) return message.channel.send("<:WrongMark:524375774741135362> I can't kick this member!");
  var embedColor = 'blue';
  var kickEmbed = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField('Kicked member', `${target.user.username}#${target.user.discriminator}  ID: ${target.user.id}`)
    .addField('Kicked by', `${message.author.username}#${message.author.discriminator} ID: ${message.author.id}`)
    .addField('Reason:', reason)
    .setImage('https://cdn.discordapp.com/attachments/535027866459701268/535422075410710528/DKSm.gif')
    .setTimestamp();
  
  var warningEmbed = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField('Kicked by', message.author.tag)
    .addField('Reason:', reason)
    .setImage('https://cdn.discordapp.com/attachments/535027866459701268/535422075410710528/DKSm.gif')
    .setTimestamp();
  
  target.kick().then(target => target.send(`:information_source: You've been kicked in **${message.guild.name}**!`, warningEmbed))
  return message.channel.send(`:information_source: User Successfully Kicked!`, kickEmbed);
  message.delete();
                     
    
  }

module.exports.help = {
  name: "kick"
}

//all has been set!
//So?