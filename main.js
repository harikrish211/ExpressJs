const express=require('express');
const app=express();
const user=require('./routes/userRoutes');
const product=require('./routes/productRoutes');
const cart=require('./routes/cartRoutes');

app.use("/user",user);
app.use("/products",product);
app.use("/cart",cart);

app.listen(3000,()=>
{
    console.log("Server is running");
})