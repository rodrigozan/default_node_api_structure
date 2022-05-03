import express from 'express'
import db from '../database/config'
import router from '../src/user/user.routers'

const app = express()

app.use(router)

export default app