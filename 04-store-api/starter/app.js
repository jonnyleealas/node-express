require('dotenv').config()
const express = require('express')
const app = express()

// async errors
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.json())


// routes

app.get('/', (req, res) => {
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products route</a>')
})

// products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async () => {
    try {
        // ConnectDB
        app.listen('3000')
    } catch(error) {
        res.send(error)
    }
}
