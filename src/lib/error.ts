import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export async function commandError(interaction, error) {
    console.log({ error })
    await interaction.followUp({
        embeds: [
            new EmbedBuilder().setDescription(
                'Error ocurred. Please try again later.'
            ),
        ],
    })
}
