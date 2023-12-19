const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('home page')
})

app.get('/haerin', (req, res) => {

})

app.get('/hyein', (req, res) => {

})

app.get('/danielle', (req, res) => {

})

app.get('/lisa', (req, res) => {

})

app.all('*', (req, res) => {
    res.status(400).send('resource not found')
})

app.listen(5000, () => {
    console.log('listening on 5000')
})