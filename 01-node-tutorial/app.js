// const express = require('express')
// const app = express()
// const {people} = require('./fakeData')

// app.use(express.static('./methods-public'))
// app.use(express.urlencoded({extended: false}))

// app.get('/', (req, res) => {
//     res.send('home')
// })

// app.get('/people', (req, res) => {
//     res.status(200).json({success: true, data: people})
// }) 

// app.post('/login', (req, res) => {
//     const {name} = req.body
    
//     if(name === jonny){
//         return res.status(200).send(`welcome ${name} you are now logged in`)
//     } else {

//         res.send('no name provided')
//     }
// })

// app.listen('5000', () => {
//     console.log('listening on 5000')
// })

const express = require('express')
const app = express()

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))

app.get('/' ,(req, res) => {
    res.send('this is the home page')
})

app.post('/login', (req, res) => {
  console.log(req.body)
  const {name} = req.body

  if(name === 'jonny'){
    res.status(200).send('Post is working')
  } else {
    res.send('no name found')
  }
})

app.listen('5000', () => {
    console.log('listening on 5000')
})