const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end(`<h1>Welcome to my Page</h1>`)
    }else{
        res.end(`<h1>OOPS!</h1>
            <a href='/'>TAKE ME HOME</a>`)
    }
})

server.listen(3000)