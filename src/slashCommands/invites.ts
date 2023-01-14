import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { commandError } from '../lib/error'
import prisma from '../lib/prisma-client'
import { SlashCommand } from '../types'

const command: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName('invites')
        .setDescription('Shows your invites to this server.'),
    execute: async (interaction) => {
        await interaction.deferReply()

        try {
            const guild = await prisma.discordGuild.findUnique({
                where: { id: interaction.guildId },
                include: { users: true },
            })

            const user = await prisma.user.findUnique({
                where: { id: interaction.user.id },
            })

            const users = await prisma.user.findMany({
                orderBy: [{ credit: 'desc' }],
            })

            const ranking = users.findIndex(
                (i) => i.discordId === interaction.user.id
            )

            console.log({ guild, user, ranking })

            await interaction.followUp({
                embeds: [
                    new EmbedBuilder()
                        .setDescription(ranking.toString())
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
