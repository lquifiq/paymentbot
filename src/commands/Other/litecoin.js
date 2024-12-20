const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('litecoin')
        .setDescription('Send litecoin address for purchases.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('> <:ltc:1319616831530467348> Litecoin Purchases')
            .setDescription('Send money to the ltc address below, and receive ur product shortly. \n ```LLZhKX8VDBh8QeyaVF18yAgbKwgS9dxdF8```')
            .setColor(0x6945ed);

        await interaction.reply({
            embeds: [embed]
        });
    }
};``