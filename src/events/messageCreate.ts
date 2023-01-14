import { ChannelType, Message } from 'discord.js'
import { BotEvent } from '../types'

const event: BotEvent = {
    name: 'messageCreate',
    execute: async (message: Message) => {
        if (!message.member || message.member.user.bot) return
        if (!message.guild) return
        if (message.channel.type !== ChannelType.GuildText) return
    },
}

export default event
