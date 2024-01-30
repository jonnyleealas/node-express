const express = require('express')
const app = express()
const morgan = require('morgan')
let {people} = require('./fakeData')



app.use(morgan('tiny'))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: {people}})
})

app.listen('5000', () => {
    console.log('listening on 5000')
})