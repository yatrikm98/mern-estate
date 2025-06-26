import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import listingRouter from './routes/listing.route.js'
import path from 'path'
import { fileURLToPath } from 'url';


dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

const connectMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to mongodb')
        app.listen(3000, () => {
            console.log('server is running on 3000')
        })
    } catch (error) {
        console.log(error)
    }
}

connectMongoose()



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)


app.use(
    express.static(
        path.join(__dirname, '../client/dist')
    )
)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'

    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

app.get(/^.*$/, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
})

