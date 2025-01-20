const express = require("express");
const app = express();
require("dotenv").config()

app.get("/",((req,res)=>{
    res.send("hello from the express app")
}))

app.get("/login",((req,res)=>{
    res.send("<h1>Please login at the Ridham.com!</h1><p>hello world!!!!!</p>")
}))

app.listen(process.env.PORT || 3000,()=>{
    console.log(`app is running on the port ${process.env.PORT}`);
})
