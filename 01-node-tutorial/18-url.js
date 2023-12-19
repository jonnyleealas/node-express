const http = require('http')

const server = http.createServer((req, res)=>{
    const url = req.url
if(url === '/hanni'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>hanni hanni hanni hanni</h1>')
    res.end()
}
if(url === '/'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>home page</h1>')
    res.end()
}

if(url === '/minji'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>minji minji</h1>')
    res.end()
}
   
else{
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>Page not found</h1>')
    res.end()
}
}) 
server.listen(5000)