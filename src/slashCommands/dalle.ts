import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { SlashCommand } from '../types'
import { Configuration, OpenAIApi } from 'openai'

async function hit(prompt: string) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    })

    const openai = new OpenAIApi(configuration)

    const response = await openai.createImage({
        prompt,
        n: 1,
        size: '512x512',
    })

    return response.data.data[0].url
}

const command: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName('dalle')
        .setDescription("Generate an image using OpenAI's DALL.E")
        .addStringOption((option) => {
            return option
                .setName('prompt')
                .setDescription('Your prompt.')
                .setRequired(true)
        }),
    execute: async (interaction) => {
        await interaction.deferReply()
        const { value } = interaction.options.data[0]

        return interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setImage(await hit(value.toString()))
                    .setDescription(value.toString())
                    .setColor('Random'),
            ],
        })
    },
    cooldown: 10,
}

export default command
