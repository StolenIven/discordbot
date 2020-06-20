const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["btsmemes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const btsEmbed = new Discord.MessageEmbed()
    .setImage(img)

    message.channel.send(btsEmbed);

}

module.exports.config = {
    name: "BTSMeme",
    description: "",
    usage: "*bts",
    accessableby: "Members",
    aliases: []
}