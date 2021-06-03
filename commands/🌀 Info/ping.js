const { Client, Message, MessageEmbed } = require('discord.js');
const config = require("../../config.json")

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Returns latency and API ping",
    useage: "ping",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        message.channel.send(
            new MessageEmbed()
                .setColor(config.colors.yes)
                .setFooter("Made By Nirav Chotaliya from LEPROX INFOTECH")
                .setTitle(`${'🎈'} Pinging....`)
        ).then(msg => {
            msg.edit(
                new MessageEmbed()
                .setColor(config.colors.yes)
                .setFooter("Made By Nirav Chotaliya from LEPROX INFOTECH")
                .setThumbnail(client.user.displayAvatarURL())
                .setTitle(`${"🎈"} Ping: \`${Math.round(Date.now() - message.createdTimestamp)}ms\`\n\n${"🎈"} Api Latency: \`${Math.round(client.ws.ping)}ms\``)
            )
        })
    }
}