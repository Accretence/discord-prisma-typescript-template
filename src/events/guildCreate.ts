import { Guild } from 'discord.js'
import { BotEvent } from '../types'

const event: BotEvent = {
    name: 'guildCreate',
    execute: (guild: Guild) => {
        console.log('May want to add a guild to Database.')
    },
}

export default event
