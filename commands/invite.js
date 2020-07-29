const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
      
      let embed = new Discord.RichEmbed()
        .setColor('blue')
        .setAuthor('Me coloque no seu server', client.user.displayAvatarURL)
        .setDescription("https://discord.com/api/oauth2/authorize?client_id=736618611644563526&permissions=8&scope=bot")
      message.channel.send(embed);

}

