import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes/routes'
import HttpException from './interfaces/http-exception.model'
import {
    Client,
    GatewayIntentBits,
    Collection,
    PermissionFlagsBits,
} from 'discord.js'
import { Command, SlashCommand } from './types'
import { readdirSync } from 'fs'
import { join } from 'path'
import config from './config'

const { Guilds, MessageContent, GuildMessages, GuildMembers } =
    GatewayIntentBits

export const client = new Client({
    intents: [Guilds, MessageContent, GuildMessages, GuildMembers],
})

client.slashCommands = new Collection<string, SlashCommand>()
client.commands = new Collection<string, Command>()
client.cooldowns = new Collection<string, number>()

const handlersDir = join(__dirname, './handlers')
readdirSync(handlersDir).forEach((handler) => {
    require(`${handlersDir}/${handler}`)(client)
})

client.login(config.token)

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

// Serves images
app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
    res.json({ status: 'API is running on /api' })
})

app.use(
    (
        err: Error | HttpException,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        // @ts-ignore
        if (err && err.name === 'UnauthorizedError') {
            return res.status(401).json({
                status: 'error',
                message: 'missing authorization credentials',
            })
            // @ts-ignore
        } else if (err && err.errorCode) {
            // @ts-ignore
            res.status(err.errorCode).json(err.message)
        } else if (err) {
            res.status(500).json(err.message)
        }
    }
)

app.listen(PORT, () => {
    console.info(`server up on port ${PORT}`)
})
