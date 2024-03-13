const express = require('express')
const app = express()

const people = require('./routes/people')
//stats html
app.use(express.static('./methods-public'))
// parses form and allows us to get data so we can use it: req.body
app.use(express.urlencoded({extended: false}))
// parse json data
app.use(express.json())
//router
app.use('/api/people', people)

app.post('/login', (req, res) => {
    const {name} = req.body
    console.log('req.body:',req.body)
   
    if(name === ''){
        res.status(404).send("please enter a password")
    }

    if(name !== "taco-app"){
        res.status(401).send("incorrect password")
    }

    if(name === "taco-app"){
        res.send(`Welcome to the website ${name}`)
    } 
})

app.get('/', (req, res) => {
    res.status(200).send("home page")
})



app.listen(5000, () => {
    console.log("server is listening on 5000")})