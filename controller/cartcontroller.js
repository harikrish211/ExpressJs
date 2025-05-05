const getdata=(req,res)=>
{

        
        res.send("<h1>Cart Page</h1>");

}
const postdata=(req,res)=>{
    const { userId } = req.params;
                res.send(`Adding product to cart for user with ID: ${userId}`);


}

module.exports=
{
    getdata,
    postdata
}