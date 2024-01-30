const express = require('express')
const app = express()
const morgan = require('morgan')
let {people} = require('./fakeData')



app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: {people}})
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('POST METHOD WORKED')
})

app.listen('5000', () => {
    console.log('listening on 5000')
})