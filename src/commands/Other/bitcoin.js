const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bitcoin')
        .setDescription('Send bitcoin address for purchases.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('> <:btc:1319617418531835984> Bitcoin Purchases')
            .setDescription('Send money to the btc address below, and receive ur product shortly. \n ```bc1qpxjva6g3vedn3sj4exqna7ep0qm0ddlhl0xwet```')
            .setColor(0xFFFF00);

        await interaction.reply({
            embeds: [embed]
        });
    }
};``