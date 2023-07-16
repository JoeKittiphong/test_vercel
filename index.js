const express = require("express")
const app = express()

app.listen(3000,()=>{
    console.log("server is running");
})

app.get("/",(req, res)=>{
    res.send("API is running")
})

app.get("/about",(req, res)=>{
    res.send("this is about page")
})

module.exports = app