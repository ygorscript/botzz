module.exports.run = (client, message, args) => {
  
  //hold it
  
  if(!message.channel.nsfw) return message.channel.send("**só mando um pornozin em canal nsfw**") //warn user to use command when not in nsfw channel
  
  



  const random_nsfw_img =["https://sexwall.me/wp-content/uploads/2016/01/tumblr_inline_nziga72Fgo1r6dbla_500.gif", "https://sexwall.me/wp-content/uploads/2016/03/tumblr_nuaz34QNnN1uftpryo2_500.gif","https://sexwall.me/wp-content/uploads/2017/04/tumblr_nlou0sk6rH1twe1zjo1_500.gif","https://sexwall.me/wp-content/uploads/2014/02/1486606-incredible-hentai-gif-photo.gif"]
  
  const randomized = random_nsfw_img[Math.floor(Math.random() * random_nsfw_img.length)] //this is let you randomize your picture
  
  message.channel.send(randomized);
}

//ok try to send the command in discord

module.exports.help = {
  name: "pornofodase"
}