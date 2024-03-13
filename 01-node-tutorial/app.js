const express = require('express')
const app = express()
let { people } = require("./fakeData")

//stats html
app.use(express.static('./methods-public'))
// parses form and allows us to get data so we can use it: req.body
app.use(express.urlencoded({extended: false}))
// parse json data
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).send("home page")
})

app.get('/api/people', (req, res) => {
     res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const { name } = req.body

    if(!name){
        return res.status(400).json({success: false, msg:'fuck you add the correct shit'})
    }
    res.status(202).json({success:true, person:name})
})

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

app.post('/api/postman/people', (req,res) => {
    const {name} = req.body
    if(!name){
        return res
            .status(400)
            .json({success: false, msg: "please provide credentials"})
    }

    res.status(201).send({success: true, data: [...people, name]})
})

app.put('/api/postman/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    console.log(id, name)
    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res  
            .status(404)
            .json({success: false, msg: `person with id ${id} does not exist`})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
    
})

app.delete('/api/postman/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res
            .status(404)
            .json({success: false, msg:"user delete"})
    }

    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({success: true, data: newPeople})
})

app.listen(5000, () => {
    console.log("server is listening on 5000")})