const express = require('express')
const app = express()
const {people} = require('./fakeData')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('home')
})

app.get('/people', (req, res) => {
    res.status(200).json({success: true, data: people})
}) 

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('post route')
})

app.listen('5000', () => {
    console.log('listening on 5000')
})