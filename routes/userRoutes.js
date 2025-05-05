const express=require('express');
const route=express.Router(); 
const controller=require('../controller/usercontroller');

route.get('/',controller.getdata);


route.post('/',controller.postdata);

    route.get('/:id',controller.getdatabyid);




module.exports=route;