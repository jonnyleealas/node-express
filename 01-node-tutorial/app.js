const express = require('express')
const app = express()

app.get('/', (req, res) => {
<<<<<<< HEAD
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(`Method: ${method}, Url: ${url}, time: ${time}`)
    res.send('Home')
=======
    res.status(200).send('<h1>Test page</h1>')
})

app.get('/este', (req, res) => {
    res.send('<h1>hello you fuckers</h1>')
})
// params can be added in url using req.params
app.get('/newjeans/:personID', (req, res) => {
    console.log(req.params)
    const { personID } = req.params
    const singlePerson = people.find((person) => person.id === Number(personID))
    const singlePersonString = people.find((person) => person.title === String(personID))
    if (!singlePerson) {
        return res.status(404).send('person does not exsist')
    }
        return res.json(singlePerson)
>>>>>>> 8bd29bdcea3454a1b97760f47de2f60fe698031d
})

app.get('/about', (req, res) => {
    const method = req.method
    const time = new Date().getFullYear()
    const url = req.url
    console.log(`Method: ${method}, Url: ${url}, time: ${time}`)
    res.send("About")
})


<<<<<<< HEAD
app.listen(5000, () => {
=======
app.get('/api/people', (req, res) => {
    const newPeople = people.map((person) => {
        const {id, title, body} = person
        return {id, title, body}
    })
    res.json(newPeople)
})

app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    let sortedPeople = [...people]

    if(search){
        sortedPeople = sortedPeople.filter((person) => {
            return person.title.startsWith(search)
        })
    }
    
    if(limit){
        sortedPeople = sortedPeople.slice(0, Number(limit))
    }
    res.status(200).json(sortedPeople)
})

app.get("*", (req, res) => {
    res.status(404).send("<h1>Page not found</h1>")
})


app.listen(5000, () => { 
>>>>>>> 8bd29bdcea3454a1b97760f47de2f60fe698031d
    console.log('listening on 5000')
})