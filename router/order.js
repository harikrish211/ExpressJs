const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    console.log("User list ");
    
})

router.post('/',(req,res)=>{
    console.log("posted");
    res.statusCode=200;
    res.send("<h1>hello world</h1>");
})

module.exports=router;
