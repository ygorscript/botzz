const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (client, msg, args) => {
  //message.channel.send("**Coming Soon**");

var num1 = Math.floor(Math.random() * 99);
  var num2 = Math.floor(Math.random() * 99);
  let sum = `${num1}+${num2}`;
  let sub = `${num1}-${num2}`;
  var quest = [sum, sub];
  let questrand = quest[Math.floor(Math.random() * quest.length)]
  let confirm = Math.eval(questrand)
  
  //var evaluate = Math.eval(args);
  //return msg.channel.send(evaluate);
  try {
         const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { maxMatches:1, time: 15000, errors: ['time'] });
        await msg.channel.send("Responda a questão em 15 segundos: \n**"+questrand+"=...** \n\ndigite `cancel` para cancelar a operação")
        collector.on('collect', msg => {
            if (msg.content.toLocaleLowerCase() == confirm) {
                return msg.channel.send(":white_check_mark: **Você acertou, parabéns !**");
            } else if (msg.content.toLocaleLowerCase() == "cancel") {
                return msg.channel.send("**CANCELOU FRACO? HAHAHA**");
            } else if (msg.content.toLocaleLowerCase() != confirm) {
                return msg.channel.send(":x: **ERROU BURRÃO O CORRETO É** "+confirm);
            }
        }
        );
         collector.on('end', collected => {
              if (collected.size === 0) {
               msg.channel.send("<:WrongMark:524375774741135362> **Muito lento...*");
                }
            });
          
        
  }
  catch(errors){
      console.error(errors);
      msg.channel.send("<:WrongMark:524375774741135362> Error...");
  }
 }

module.exports.help = {
  name: "matematica"
}