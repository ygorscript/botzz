module.exports.run = (client, message, args) => {
 let say = args.join(' ');
 if (!say) return message.channel.send("**especifique o texto**");
 message.delete();
 message.channel.send(say)
}

module.exports.help = {
  name: "falar"
}