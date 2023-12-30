const express = require('express')
const app = express()
const {people} = require('./fakeData')
const diaper = people

app.get('/homepage', (req, res) => {
    res.status(200).send("<h1>Hi Bryan t(._.)t</h1>")
})

app.get('/secretroute', (req, res) => {
    res.send('<h1>secret route</h1>')
})

app.get('/fakeapi', (req, res) => {
    res.status(200).send(diaper)
})
app.get('*', (req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(9000, () => {
    console.log('listening on 5000')
})