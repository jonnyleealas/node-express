const express = require('express')
const app = express()
const { people } = require('./fakedata')

app.get('/este', (req, res) => {
    res.send('<h1>hello you fuckers</h1>')
})
// params can be added in url using req.params
app.get('/newjeans/:personID', (req, res) => {
    const { personID } = req.params

    const singlePerson = people.find((person) => person.id === Number(personID))

    const singlePersonString = people.find((person) => person.title === String(personID))

    if (!singlePerson) {
        return res.status(404).send('person does not exsist')
    }
    

        return res.json(singlePerson)
    
})

app.get('/newjean/:personTitle', (req, res) => {
    const {personTitle} = req.params

    const singlePerson = people.find((person) => person.title === String(personTitle))

    if(!singlePerson){
        return res.status(404).send('Title not found')
    }

    return res.json(singlePerson)
})

app.get("*", (req, res) => {
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(5000, () => {
    console.log('listening on 5000')
})