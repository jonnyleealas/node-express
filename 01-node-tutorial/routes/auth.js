const express = require('express')
const auth = express.Router()

auth.post('/', (req, res) => {
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

module.exports = auth