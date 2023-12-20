const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('<h1>jisoo home</h1>')
})

app.get('/minji', (req, res) => {
    res.status(200).send('<h1>minji minji</h1>')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>PAGE NOT FOUND</h1>')
})
app.listen(5000, () => {
    console.log('listening on 5000')
})