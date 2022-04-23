const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(200, "Hello HOME PAGE!!!")
})

app.get("/about", (req, res) => {
    res.send(200, "Hello ABOUT PAGE!!!")
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>The page does not exist!!!</h1>")
})

app.listen(5000, () => {
    console.log('Server is listening on 5000 port...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen