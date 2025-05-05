const express=require('express');
const route=express.Router();

    
    
    
        
            route.get('/:userId', (req, res) => {
                const { userId } = req.params;
                res.send(`Fetching cart for user with ID: ${userId}`);
              });
              
              route.post('/:userId', (req, res) => {
                const { userId } = req.params;
                res.send(`Adding product to cart for user with ID: ${userId}`);
              });


module.exports=route;