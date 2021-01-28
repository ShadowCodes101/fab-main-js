const Discord = require("discord.js");
const cooldown = new Set();
const client = require("nekos.life");
const nekos = new client();

module.exports = {
  name: "slap",
 async execute(message, args) {
    const image = await nekos.sfw.slap();
      const mem = message.mentions.members.last();
      if (cooldown.has(message.author.id)) {
        message.channel
          .send(`**🚫 Please wait 5 seconds before using that command again**`)
          .then((sentmsg) => sentmsg.delete({ timeout: 5000 }));
      } else if (!mem || message.author.id == mem.id) {
        message.channel.send("❌ **Wrong arguments please mention someone.**");
      } else if (mem.user.bot)
        return message.channel.send("No, not with bots!");
      else if (mem.id === "759762948016177195")
        return message.channel.send("Haha, you can't do that with me");
      else {
        const embed = new Discord.MessageEmbed()
          .setAuthor(
            `${message.author.username} slapped ${mem.user.username} oof`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setColor("RANDOM")
          .setFooter(
            `${mem.user.username} || Source: Anime Neko`,
            mem.user.displayAvatarURL({ dynamic: true })
          )
          .setImage(image.url);
        message.channel.send(embed);
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 5000);
      }
    }
  }
