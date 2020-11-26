const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: "clear",
    execute(message, args){

    if (message.channel.type === 'text') {
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('❌ **You dont have permission to delete messages......LOL**').then(sentmsg => sentmsg.delete({ timeout: 5000 }));
      message.delete();
      if(!args[0]) return message.channel.send("❌**Please mention the no. of msgs you want to clear.**").then(sentmsg => {
        sentmsg.delete({timeout: 5000});
      });
    var numbers = message.content.substr(message.content.indexOf(' ') + 1);
    message.channel.messages.fetch({ limit: numbers }).then((messages) => {
      message.channel.bulkDelete(messages).then(() => {
        message.channel.send(`**✅ ${numbers} message(s) deleted**`).then(msg => msg.delete({ timeout: 5000 }));
      });
    }).catch(error => {
      message.channel.send(error);
    });
  }
    }
  }
