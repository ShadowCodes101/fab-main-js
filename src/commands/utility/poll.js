const Discord = require("discord.js");

module.exports = {
  name: "poll",
  description: "poll",
  execute(message, args) {
    try {
      const q = args.slice(0).join(" ");

      if (!q)
        return message.channel.send(
          "❌ **Error** ```Required argument <poll title> is missing!\n                   ^^```"
        );
      message.delete({ timeout: 2000 });
      const pollEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Poll - ${q}`)
        .setDescription(
          `<:YOS:764504833448345640> -  Yos \n\n<:nopefarod:749166580503412787> - Nope \n\n :white_circle: - Other (send in this channel) `
        )
        .setTimestamp()
        .setFooter(
          `Poll created by ${message.member.displayName}`,
          message.author.displayAvatarURL({ dynamic: true })
        );
      message.channel.send(pollEmbed).then((sentEmbed) => {
        sentEmbed.react("764504833448345640");
        sentEmbed.react("749166580503412787");
        sentEmbed.react("⚪");
      });
    } catch (err) {
      return (
        message.channel.send(
          `❌ **There was an error while running this command** \`\`\`${err}\`\`\` \n Please contact \`Hey Fab, I'mma kill you#0640\``
        ) && console.log(err)
      );
    }
  },
};
