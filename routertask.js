const express=require('express');
const app=express();
const rout=require("./router/books");

app.use("/books",rout);
app.listen(3000,()=>{
    console.log("hello");
    
})