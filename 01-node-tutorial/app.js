const express = require('express')
const app = express()
const {people} = require('./fakedata')

app.get('/este', (req, res) => {
    res.send('<h1>hello you fuckers</h1>')
})

app.get('/fakedata', (req, res) => {
    res.send(people)
})
app.listen(5000, () => {
    console.log('listening on 5000')
})