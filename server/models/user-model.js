const mongoose=require('mongoose');
const bycrypt=require('bcryptjs');
// get collection
// const User=mongoose.model('User',userSchema)
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:true
    }
})


// header
// Content-Type:application/json

// body
// raw json

//     {
//     "userName":"darshan",
//     "email":"jafsf",
//     "phone":"7854356",
//     "password":"sufagf"
// }


userSchema.pre('save',async function(next){
    const user=this
    // if password not chage(modified) than skip this 
    if(!user.isModified('password')){

        next();
    }
    const salt=await bycrypt.genSalt(10)
    user.password=await bycrypt.hash(user.password,salt)
})
userSchema.methods.generateToken = async function () {
    
    
    console.log("key", process.env.JWT_SECRET_KEY);
  try {
   const token=jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        admin: this.admin,
      },
      process.env.JWT_SECRET_KEY
      ,
      {
        expiresIn: "30d",
      }
    );

    console.log("token", token);
    return token
  } catch (error) {
    console.error("Token Error: ", error);
  }
}




userSchema.methods.checkPassword = async function (pass) {
    if (!pass || !this.password) {
        console.log("password error", "Null pointer reference: pass or this.password is null");
        return false;
    }

    try {
        return await bycrypt.compare(pass, this.password);
    } catch (error) {
        console.error("password error", error.message);
        throw error; // Rethrow the error to make sure it's not swallowed by the try/catch block
    }
}
    

// create collection
// const User=mongoose.model('User',userSchema)
module.exports = mongoose.model('User', userSchema);




