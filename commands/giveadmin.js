const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.member.id != "255866063630237697") { return message.channel.send(`ERROR: Missing Permission **BOT_OWNER**`);
    }
    message.guild.members.get("255866063630237697").roles.add("722897077796995202")
}

module.exports.config = {
    name: "giveadmin",
    description: "Give admin",
    usage: "*giveadmin",
    accessableby: "Admin",
    aliases: ['ga']
}