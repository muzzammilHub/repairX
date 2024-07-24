import express from "express"
import cors from "cors"
import { connectToDatabase } from "./db/index.js"

const app = express()
app.use(cors())
connectToDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import userRouter from "./routes/user.routes.js"
app.use('/api/v1/user', userRouter)

app.listen(4000, ()=>{
    console.log("server is up and running")
})