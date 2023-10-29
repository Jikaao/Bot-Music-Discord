const { useQueue } = require("discord-player")

async function checkQueue(interaction) {
    const queue = useQueue(interaction.guild.id);
    if (!queue) return [false, {
        content: "Music is not playing.\n```Aucune musique n'est en cours.```",
        ephemeral: true,
    }];
    const memberChannelId = interaction.member?.voice?.channelId;
    const queueChannelId = queue?.channel.id;
    if (memberChannelId != queueChannelId) return [false, {
        content: "Connect to the same VC as the BOT.\n```BOT Veuillez le connecter au même chat vocal.```",
        ephemeral: true,
    }];
    return [true, queue]
}

module.exports = {
    checkQueue
}