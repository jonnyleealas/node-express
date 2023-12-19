const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Home  bittttchhhesss')
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