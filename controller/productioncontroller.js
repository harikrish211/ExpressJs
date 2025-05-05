const path = require('path');

const getdata=(req,res)=>
{
    res.sendFile(path.join(__dirname, '../view/productForm.html'));
    

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