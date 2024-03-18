const express = require('express')
const app = express()
const tasks = require('./router/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const port = 3000

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.send('task app')
})

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("listening on port 3000 ..."))
    } catch (error) {
        console.log(error)
    }
}

start()


console.log('Task Manager App')
