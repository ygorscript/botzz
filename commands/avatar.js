const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
    .setDescription(`Este é o avatar: \n[url do avatar](${user.avatarURL})`)
    .setAuthor(`${user.username}#${user.discriminator}`, client.user.displayAvatarURL)
    .setImage(user.displayAvatarURL)
    .setColor('blue')
    .setFooter("pedido por " + message.author.tag)
message.channel.send(embed);

}

module.exports.help = {
    name: "avatar"
}

