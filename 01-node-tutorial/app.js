const express = require('express')
const app = express()

const auth = require('./routes/auth')
const people = require('./routes/people')

//stats html
app.use(express.static('./methods-public'))
// parses form and allows us to get data so we can use it: req.body
app.use(express.urlencoded({extended: false}))
// parse json data
app.use(express.json())
//router
app.use('/login', auth)
app.use('/api/people', people)

app.listen(5000, () => {
    console.log("server is listening on 5000")})