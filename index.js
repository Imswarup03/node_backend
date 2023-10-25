// get request handling
console.log("Get request handling");

// install express 
// npm install express


// env variable 

require('dotenv').config();

const express=require("express");

// import express from "express"
const app = express()
const port = 3000;
app.get('/',(request,response)=>{
    response.send("Hello World!")
});

app.get('/twitter',(request,response)=>{
    response.send('Welcome to twitter')
})


app.get('/login',(request,response)=>{
    response.send('<h1>Welcome to login</h1>')
})

app.get('/youtube',(request,response)=>{
    response.send('<h1>Welcome to youtube</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`express server listening on port ${process.env.PORT}`);
})