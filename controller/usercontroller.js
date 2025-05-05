const getdata=(req,res)=>
{
    res.send("Fetching all users");


}

const postdata=(req,res)=>
    {
        res.send("Adding a new user");
    
    }

    const getdatabyid=(req,res)=>
        {
            const { id } = req.params;
        res.send(`Fetching user with ID: ${id}`);
        
        }

        module.exports=
        {
            getdata,getdatabyid,
            postdata
        }
