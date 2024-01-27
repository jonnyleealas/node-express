const express = require('express')
const app = express()
const authorize = require('./extraFiles/auth')
const logger = require('./extraFiles/logger')
app.use([logger, authorize])

app.get("/", (req, res) => {
    res.send('home')
})

 app.listen('5000', () => {
    console.log('listening on 5000')
})