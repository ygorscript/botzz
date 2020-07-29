const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('Blue')
  .setThumbnail("https://media.giphy.com/media/QzBgEKS9BVkCPPEXmH/giphy.gif")
  .setAuthor('𝒚𝒈𝒐𝒓 𝒃𝒐𝒕 乡 help', "https://media.giphy.com/media/QzBgEKS9BVkCPPEXmH/giphy.gif")
  .addField('𝑹𝒂𝒏𝒅𝒐𝒎 ✧:', '`creditos`, `falar`, `abraçar`, `tapao`, `Beijar`, `matematica`')
  .addField('𝑷𝒓𝒐𝒑𝒊𝒆𝒅𝒂𝒅𝒆𝒔 ✧:', '`botinfo`, `limpar`')
  .addField('𝑼𝒕𝒊𝒍𝒊𝒅𝒂𝒅𝒆𝒔 ✧:', '`avatar`,`ygor`, `convite`, `ping`')
  .addField('𝑴𝒐𝒅𝒆𝒓𝒂𝒄𝒂𝒐 ✧:', '`kick`, `ban`, `limpar`')
  .addField('𝑵𝑺𝑭𝑾 ✧', '`pornofodase`')
  .setFooter('𝑭𝒆𝒊𝒕𝒐 𝒑𝒐𝒓 𝒚𝒈𝒐𝒓. ⍟');
msg.channel.send(embed);
  
  
};
