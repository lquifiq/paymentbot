const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('paypal')
        .setDescription('Send paypal for purchases.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('> <:paypal:1319617875605979178> Paypal Purchases')
            .setDescription('Send money to the paypal below address below, and receive ur product shortly. \n ```coming soon```')
            .setColor(0x0000FF);

        await interaction.reply({
            embeds: [embed]
        });
    }
};``