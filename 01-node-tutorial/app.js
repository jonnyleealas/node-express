const express = require('express')
const app = express()
const logger = require('./extraFiles/logger')

app.use(logger)

app.get('/', (req, res) => {
    res.send("home")
})

app.get('/about', (req, res) => {
    res.send("About")
})

app.get('*', (req, res) => {
    res.send('page does not exsist')
})

app.listen(5000, () => {

    console.log('listening on 5000')
})