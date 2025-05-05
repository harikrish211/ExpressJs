const express=require('express');
const route=express.Router();   



route.get('/',(req,res)=>
    {
        res.send("Fetching all products");
    
    })
    
    
    route.post('/',(req,res)=>
        {
            res.send("Adding a new product");
        
        })
    
    
        route.get('/:id', (req, res) => {
            const { id } = req.params;
            res.send(`Fetching product with ID: ${id}`);
          });




module.exports=route;