module.exports.run = (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply('**SAI BOI, VOCÊ PRECISA DE PERM**')
    let user = msg.mentions.users.first()
    if (!user) return msg.reply('**especifique o usario**')


    if (!msg.guild.member(user).bannable) return msg.reply('Could not ban that user, either they have an higher role or you are just a noob.')

    msg.guild.member(user).ban()
    msg.channel.send(`Você baniu com sucesso o usuario ${user.tag}.`)
}


module.exports.help = {
    name:"ban",
    usage:"*ban <user>",
    desc: "Bans the mentioned user. Requires you to have ban permission.",
    example:"*ban @cex",
    group: "moderation",
    guildOnly: true,
    ownerOnly: true,
}