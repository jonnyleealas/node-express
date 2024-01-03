const express = require('express')
const app = express()
const {people} = require('./fakedata')

app.get('/este', (req, res) => {
    res.send('<h1>hello you fuckers</h1>')
})
// params can be added in url using req.params
app.get('/:personId', (req, res) => {

    const {personId} = req.params
    const singlePerson = people.find((person) => person.title === String(personId))
    res.json(singlePerson)
})
app.listen(5000, () => {
    console.log('listening on 5000')
})