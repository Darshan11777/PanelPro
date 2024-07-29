
const User = require('../models/user-model')
const bycrpt = require('bcryptjs')
const home = async (req, res) => {
    try {
        console.log('Hello World!');
        res.status(200).send('Hello World!');
    } catch (error) {
        console.log(error);
        res.status(500).send({ massege: error });
    }
}

// register add new user
const register = async (req, res, next) => {
    try {
        if (!req || !req.body) {
            throw new Error('req or req.body is null');
        }

        const { userName, password, email, phone ,admin} = req.body;

        if (!userName || !password || !email || !phone) {
            throw new Error('Missing required fields');
        }

        const userExist = await User.findOne({ email }).exec();
        if (userExist) {
            throw new Error('user already exist');
        }

        
        
        const newUser = await User.create({ userName, password, email, phone ,admin })
        console.log("new user created", newUser);
        res.status(200).json({
            body: newUser,
            token: await newUser.generateToken(),
            userId: newUser._id.toString(),
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ massage: error.message });
        // next({
        //     message: error.message,
        //     statusCode: 500,
        //     extraDetails: "REGISTER ERROR",
        // })
    }
}

// login give user there info and token
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log("LOGIN REQUEST", email, password);
        const userExist = await User.findOne({ email }).exec();
        if (!userExist) {
            console.log("user not found");
            res.status(400).send("Invalid Credicean")
            return;
        }
        console.log("user exist", userExist);
        const isMatch = await userExist.checkPassword(password);
        console.log("password matched", isMatch);

        if (isMatch) {
            console.log("password matched, generate token");
            const token = await userExist.generateToken();
            console.log("token", token);
            res.status(200).send({ user: userExist, token })
        } else {
            console.log("password not matched");
            res.status(401).send("Invalid email or password")
        }

    } catch (error) {
        console.log("LOGIN ERROR", error.message);
        next({
            message: error.message,
            statusCode: 500,
            extraDetails: "LOGIN ERROR",
        })
    }
}


const user=async(req,res)=>{
    try{
      const userData=req.user
      console.log("USERDATA",userData)
      return  res.status(200).json({msg:userData})
    }catch(error){
        console.log(`error in user controller ${error.message}`)
    }
}
module.exports = { home, register, login, user }

