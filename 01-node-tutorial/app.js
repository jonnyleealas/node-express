const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(`Method: ${method}, Url: ${url}, time: ${time}`)
    res.send('Home')
})

app.get('/about', (req, res) => {
    const method = req.method
    const time = new Date().getFullYear()
    const url = req.url
    console.log(`Method: ${method}, Url: ${url}, time: ${time}`)
    res.send("About")
})


app.listen(5000, () => {
    console.log('listening on 5000')
})