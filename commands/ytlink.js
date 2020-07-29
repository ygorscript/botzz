const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  
  let embed = new Discord.RichEmbed()
  .setColor('blue')
  .addField('<:SashBronyHappy:533772445639901221> Subscribe to BronyEN:', 'https://www.youtube.com/channel/UCh8JU5FDaHcZumHJeBHxitA?view_as=subscriber')
  message.channel.send(embed);
}

module.exports.help = {
  name: "ytlink"
}