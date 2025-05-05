const getdata=(req,res)=>
{
    res.send("Fetching all products");

}

const postdata=(req,res)=>
{
    res.send("Adding a new product");
}

const getdatabyid=(req,res)=>{
    const { id } = req.params;
            res.send(`Fetching product with ID: ${id}`);
}

module.exports=
{
    getdata,
    getdatabyid,
    postdata
}