const express=require('express');
const route=express.Router();
const cartcontroll=require('../controller/cartcontroller');

    
    
    
        
            route.get('/:userId',cartcontroll.getdata);
              
              
              route.post('/:userId',cartcontroll.postdata);
                
             


module.exports=route;