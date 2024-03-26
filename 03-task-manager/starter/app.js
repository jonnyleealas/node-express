const express = require('express')
const app = express()
const tasks = require('./router/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddlwware = require('./middleware/errorHandler')



// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

//custom error 404 middlware function
app.use(notFound)
app.use(errorHandlerMiddlwware)
const port = process.env.PORT ||3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`listening on port ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}

start()


console.log('Task Manager  ;ljsdfApp')
