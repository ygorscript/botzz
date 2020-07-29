const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
module.exports.run = async (client, msg, args, config) => {
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);


    if(!user) return msg.reply('você precisa mencionar um usuario')

    msg.channel.send(new RichEmbed().setDescription(`${msg.author.tag} abraçou ${user.tag}`).setColor("RANDOM").setImage(body.url))     

   
}


module.exports.help = {
    name:"abraçar",
    usage:"*abraçar",
    example:"*abraçar ",
    group: "fun",
    desc:"hugs mentioned user."
} 