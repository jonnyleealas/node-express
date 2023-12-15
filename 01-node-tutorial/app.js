const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('server hit')
    res.end('whats up doc')
})
server.listen(5000)