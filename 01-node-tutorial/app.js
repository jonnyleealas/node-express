const express = require('express')
const app = express()
const {people} = require('./fakeData')

app.get('/', (req, res) => {
    res.json(people)
})

app.get('/minji', (req, res) => {
    res.json(users)
})

app.all("*", (req, res) => {
    res.send('<h1>PAGE NOT FOUND</h1>')
})

app.listen(5000, () => {
    console.log('listening on 5000')
})