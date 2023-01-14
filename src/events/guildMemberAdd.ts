import { GuildMember } from 'discord.js'
import { BotEvent } from '../types'

const event: BotEvent = {
    name: 'guildMemberAdd',
    execute: (guildMember: GuildMember) => {
        console.log('May want to add a guild to Database.')
    },
}

export default event
