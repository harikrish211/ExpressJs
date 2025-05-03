const http=require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>
{
    console.log("started working");
    next();

});

app.use((req,res,next)=>
{
    res.send("<h1>hello sugamano</h1>");
});

const server=http.createServer(app);
server.listen(3000);