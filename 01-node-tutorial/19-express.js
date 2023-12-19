const express = require('express');
const app = express()


app.get('/', (req, res) => {
    res.status(200).send('Home  bittttchhhesss')
})

app.get('/jisoo', (req,res) => {
    res.status(200).send('jisoo is a flower')
})

app.get('/minji', (req, res) =>{
    res.status(200).send('<h1>minji is bias</h1>')
})

app.all("*", (req, res) => {
    res.status(404).send('<h1>page not found</h1>')
})
app.listen(5000, () => {
    console.log('listening on 5000')
})

// app.get
// app.post
// app.delete
// app.all
// app.use
// app.listen