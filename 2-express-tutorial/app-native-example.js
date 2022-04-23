const http = require("http");
const {readFileSync} = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeScripts = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
    // console.log('reqURL', req.url)
    // console.log('reqMETHOD', req.method)
    

    const url = req.url;
    // console.log('url', url);
    if(url === "/"){
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.write(homePage)
        res.end()
    }
    else if(url === "/about"){
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.write("<h1>This is the ABOUT page</h1>")
        res.end()
    }
    else if(url === "/styles.css"){
        res.writeHead(200, {
            "content-type": "text/css"
        })
        res.write(homeStyles)
        res.end()
    }
    else if(url === "/logo.svg"){
        res.writeHead(200, {
            "content-type": "image/svg+xml"
        })
        res.write(homeLogo)
        res.end()
    }
    else if(url === "/browser-app.js"){
        res.writeHead(200, {
            "content-type": "text/js"
        })
        res.write(homeScripts)
        res.end()
    }
    else{
        res.writeHead(404, {
            "content-type": "text/html"
        })
        res.write("<h1>404 This page does not exist !!!</h1>")
        res.end()
    }

        
})

server.listen(5000, () => {
    console.log("Server running on port 5000")
})