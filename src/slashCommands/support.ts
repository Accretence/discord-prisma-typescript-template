import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { SlashCommand } from '../types'
import { Configuration, OpenAIApi } from 'openai'

async function hit(prompt: string) {
    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })

        const openai = new OpenAIApi(configuration)

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `You are an AI assistant who will be answering support questions to the members of an NFT, Crypto, DAO community. User: ${prompt}`,
            max_tokens: 2048,
            temperature: 0.7,
        })

        const text = response.data.choices[0].text

        return text
    } catch (error) {
        console.log({ error })
        return 'Error'
    }
}

const command: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName('support')
        .setDescription(`Help.`)
        .addStringOption((option) => {
            return option
                .setName('question')
                .setDescription('Your prompt.')
                .setRequired(true)
        }),
    execute: async (interaction) => {
        await interaction.deferReply()
        const { value } = interaction.options.data[0]
        const answer = await hit(value.toString())

        return interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`You: ${value} \n\n GPT: ${answer}`)
                    .setColor('Random'),
            ],
        })
    },
    cooldown: 10,
}

export default command
