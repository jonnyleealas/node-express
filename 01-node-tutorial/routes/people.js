const express = require('express')
const router = express.Router()

router.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

router.post('/api/people', (req, res) => {
   const { name } = req.body

   if(!name){
       return res.status(400).json({success: false, msg:'fuck you add the correct shit'})
   }
   res.status(202).json({success:true, person:name})
})


router.post('/api/people/postman', (req,res) => {
   const {name} = req.body
   if(!name){
       return res
           .status(400)
           .json({success: false, msg: "please provide credentials"})
   }

   res.status(201).send({success: true, data: [...people, name]})
})

router.put('/api/people/:id', (req, res) => {
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

router.delete('/api/people/:id', (req, res) => {
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

module.exports = router