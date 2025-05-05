const express=require('express');
const rout=express.Router();

rout.get('/',(req,res)=>
{
console.log("Here is the list of books!");
})
rout.post('/',(req,res)=>
    {
        console.log("Book has been added!");
        
    })

    module.exports=rout;