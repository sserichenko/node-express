const express = require("express");
const app = express();

const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");

// Static

app.use(express.static("./methods-public"));

// parse form data

app.use(express.urlencoded({ extended: false }));

// json support
app.use(express.json());

// routes

app.use("/api/people", peopleRouter)
app.use("/login", authRouter)



app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
