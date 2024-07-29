const mongoose=require('mongoose');

const userModel = require('../models/user-model');


const uri=`${process.env.MONGODB_URI}`

const connectDb=async()=>{
    try {
        await mongoose.connect(uri);
        console.log(uri);
        console.log("connected to db");
    } catch (error) {
        console.error("CONNEXCTION FAILED");
        console.error("uri",uri);
        
        process.exit(0);
    }
}



module.exports=connectDb

