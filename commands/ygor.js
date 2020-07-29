const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  let happy = 'https://cdn.discordapp.com/emojis/533772445639901221.png'
let embed = new Discord.RichEmbed()
    .setColor('blue')
    .setAuthor("ygor", happy)
    .addField("meu canal:", "https://www.youtube.com/channel/UCvsjAc5mGxQhgt-c9jmNgwA?view_as=subscriber")

message.channel.send(embed);
}


module.exports.help ={
    name: "ygor"
}