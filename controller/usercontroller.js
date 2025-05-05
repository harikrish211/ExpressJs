const path=require('path');

const getdata=(req,res)=>
{
    res.sendFile(path.join(__dirname, '../view/home.html'));


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
