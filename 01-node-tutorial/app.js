const express = require('express')
const app = express()
const authorize = require('./extraFiles/auth')
const logger = require('./extraFiles/logger')
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get("/", (req, res) => {
    res.send('home')
})

app.get('/api/items', (req, res) =>{
    res.send('api/items')
})

 app.listen('5000', () => {
    console.log('listening on 5000')
})