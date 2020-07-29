const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new Discord.RichEmbed()

    .setTitle(' ')
    .setDescription(`
    Quer me adicionar em seu servidor? 
    
    **Meu convite**:

    **[Convite](https://discord.com/api/oauth2/authorize?client_id=736618611644563526&permissions=8&scope=bot)**
    `)
    .setFooter("Comando Requisitado por: " + message.author.username, message.author.avatarURL);

    message.channel.send(embed)
}