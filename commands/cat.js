const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["CAT"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const catEmbed = new Discord.MessageEmbed()
    .setImage(img)

    message.channel.send(catEmbed);

}

module.exports.config = {
    name: "Cat",
    description: "Random picture of a cat",
    usage: "*cat",
    accessableby: "Members",
    aliases: []
}