const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);


    if(!user) return msg.reply('**Você não mencionou ninguém**')

    msg.channel.send(new RichEmbed().setDescription(`${msg.author.tag} beijou ${user.tag} :heart: `).setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"beijar",
    usage:"*beijar",
    example:"*beijar ",
    group: "fun",
    desc:"Kisses mentioned user."
} 