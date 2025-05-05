const express=require('express');
const app=express();
const orderrouter=require('./router/order');
app.use("/order",orderrouter);
app.listen(3000,()=>
{
    console.log("server is running");
});
