const express=require('express');
const route=express.Router();   
const production=require('../controller/productioncontroller');



    route.get('/',production.getdata);
    
    
    route.post('/',production.postdata);
        
        route.get('/:id',production.getdatabyid);
            
          



module.exports=route;