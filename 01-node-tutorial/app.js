const express = require('express')
const app = express()
const {people} = require('./fakedata')

app.get('/este', (req, res) => {
    res.send('<h1>hello you fuckers</h1>')
})
// params can be added in url using req.params
app.get('/:personID', (req, res) => {
    const {personID} = req.params
    const singlePerson = people.find((person) => person.title === String(personID))
    if(!singlePerson){
        return res.status(404).send('Product does not exsist')
    }
    res.json(singlePerson)
})

app.listen(5000, () => {
    console.log('listening on 5000')
})