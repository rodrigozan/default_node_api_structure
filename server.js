import app from './config/express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT }`))
