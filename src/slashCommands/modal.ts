import {
    SlashCommandBuilder,
    ChannelType,
    TextChannel,
    EmbedBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    ModalBuilder,
    TextInputStyle,
} from 'discord.js'
import { SlashCommand } from '../types'

const command: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName('modal')
        .setDescription("Shows the bot's ping"),
    execute: async (interaction) => {
        const modal = new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('My Modal')

        const something = new TextInputBuilder()
            .setCustomId('something')
            .setLabel('Type anything here')
            .setStyle(TextInputStyle.Short)

        const ActionRow = new ActionRowBuilder().addComponents(something) as any

        modal.addComponents(ActionRow)

        await interaction.showModal(modal)
    },
    cooldown: 10,
}

export default command
