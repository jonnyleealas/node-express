const express = require('express')
const app = express()
let { people } = require("./fakeData")

app.use(express.static('./methods-public'))


app.get('/', (req, res) => {
    res.send("home page")
})

app.post('/login', (req, res) => {
   
    res.send("POST method successful")
})

app.listen(5000, () => {
    console.log("server is listening on 5000")
})