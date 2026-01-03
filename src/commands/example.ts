import { ChatInputCommandInteraction } from "discord.js";

import { SlashCommandBuilder } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('google')
        .setDescription('Uhh let me google that for you real quick?')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to search on Google')),
    async execute(interaction: ChatInputCommandInteraction) {

        const input = interaction.options.getString('input');
        const newInput = input?.replace(/ /g, '+');

        if (input?.indexOf(' ') !== -1) {
            await interaction.reply(`No problem, I can assist you with your search! Just click on this link:\n\n> [${input}](<https://www.google.com/search?q=` + `${newInput}>)`);
        }
    }
}