import { Client } from 'discord.js'
import { readdirSync } from 'fs'
import { join } from 'path'
import { BotEvent } from '../types'

module.exports = (client: Client) => {
    let eventsDir = join(__dirname, '../events')

    readdirSync(eventsDir).forEach((file) => {
        if (
            !file.endsWith(
                process.env.NODE_ENV == 'development' ? '.ts' : '.js'
            )
        )
            return
        let event: BotEvent = require(`${eventsDir}/${file}`).default
        event.once
            ? client.once(event.name, (...args) => event.execute(...args))
            : client.on(event.name, (...args) => event.execute(...args))
        console.log(`🌠 Successfully loaded event ${event.name}`)
    })
}
