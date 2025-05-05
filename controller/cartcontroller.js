const getdata=(req,res)=>
{

        const { userId } = req.params;
        res.send(`Fetching cart for user with ID: ${userId}`);

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