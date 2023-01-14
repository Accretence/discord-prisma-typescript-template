import { Invite, InviteGuild } from 'discord.js'
import { BotEvent } from '../types'

const event: BotEvent = {
    name: 'inviteDelete',
    execute: (invite: Invite) => {
        console.log('May want to add a guild to Database.')
    },
}

export default event
