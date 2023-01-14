import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { commandError } from '../lib/error'
import prisma from '../lib/prisma-client'
import { SlashCommand } from '../types'

const command: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName('credit')
        .setDescription('Shows your credit.'),
    execute: async (interaction) => {
        await interaction.deferReply()

        try {
            const user = await prisma.user.findUnique({
                where: { discordId: interaction.user.id },
            })

            await interaction.followUp({
                embeds: [
                    new EmbedBuilder()
                        .setDescription(user.credit.toString())
                        .setColor('Random'),
                ],
            })
        } catch (error) {
            await commandError(interaction, error)
        }
    },
    cooldown: 60,
}

export default command
