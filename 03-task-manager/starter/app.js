const express = require('express')
const app = express()
const tasks = require('./router/tasks')
const port = 3000

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.send('task app')
})

app.use('/api/v1/tasks', tasks)

app.listen(port, console.log("listening on port 3000 ..."))

console.log('Task Manager App')
