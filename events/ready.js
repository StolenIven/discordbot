const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Big Hit Entertainment", {type: "STREAMING", url: "https://www.twitch.tv/iipromiseii"});
}
