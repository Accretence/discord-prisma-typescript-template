import {
    SlashCommandBuilder,
    CommandInteraction,
    Collection,
    PermissionResolvable,
    Message,
    AutocompleteInteraction,
} from 'discord.js'

export interface SlashCommand {
    command: SlashCommandBuilder | any
    execute: (interaction: CommandInteraction) => void
    autocomplete?: (interaction: AutocompleteInteraction) => void
    cooldown?: number // in seconds
}

export interface Command {
    name: string
    execute: (message: Message, args: Array<string>) => void
    permissions: Array<PermissionResolvable>
    aliases: Array<string>
    cooldown?: number
}

export interface BotEvent {
    name: string
    once?: boolean | false
    execute: (...args) => void
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DISCORD_BOT_TOKEN: string
            DISCORD_BOT_CLIENT_ID: string
        }
    }
}

declare module 'discord.js' {
    export interface Client {
        slashCommands: Collection<string, SlashCommand>
        commands: Collection<string, Command>
        cooldowns: Collection<string, number>
    }
}
