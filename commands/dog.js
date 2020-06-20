const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["dog"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const dogEmbed = new Discord.MessageEmbed()
    .setImage(img)

    message.channel.send("Test");
    message.channel.send(dogEmbed);

}

module.exports.config = {
    name: "Dog",
    description: "Random picture of a dog",
    usage: "*dog",
    accessableby: "Members",
    aliases: []
}