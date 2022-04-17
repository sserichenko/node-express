// HTTP MODULE

const http = require("http");

const server = 
  http
    .createServer((req, res) => {
        if(req.url === "/"){
            res.end("Hello, this is our homepage")
        }
        if(req.url === "/about"){
            res.end("This is about page")
        }
        res.end(`<h1>The page is not exist!</h1>`)
    })
    
server.listen(5000);