const mongoose=require('mongoose');

const userModel = require('../models/user-model');

// REMEBER TO IN MONGODB OVERVIEW > CONNECT > ENABLE IP ADDRESH
const uri=`${process.env.MONGODB_URI}`

// const uri="mongodb+srv://dkanani405405:Darshan126@database.hfsyh9u.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Database"
// const uri="mongodb://localhost:27017/mern_admin"
// const uri="mongodb+srv://Darshan:Darshan126@database.hfsyh9u.mongodb.net/?retryWrites=true&w=majority&appName=Database"
// console.log(uri);/
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

