import { config } from 'dotenv'
config()

export default {
    token: process.env.DISCORD_BOT_TOKEN,
    clientId: process.env.DISCORD_BOT_CLIENT_ID,
} as const
