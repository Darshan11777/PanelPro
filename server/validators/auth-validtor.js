// modute schema for zod
const { z } = require('zod')

const signupSchema = z.object({
    userName:
        z.string({ required_error: "username is required" })
            .trim()
            .min(3, { message: "username should be at least 3 characters" })
            .max(10, { message: "username should be less than 10 characters" }),
    email:
        z.string({ required_error: "email is required" })
            .trim()
            .email({ message: "email should be valid" })
            .min(3, { message: "email should be at least 3 characters" })
            .max(20, { message: "email should be less than 20 characters" }),
    phone:
        z.string({ required_error: "phone number is required" })
            .trim()
            .min(10, { message: "phone number should be at least 10 characters" })
            .max(20, { message: "phone number should be less than 20 characters" }),
    password:
        z.string({ required_error: "password is required" })
            .trim()
            .min(7, { message: "password should be at least 7 characters" })
            .max(1024, { message: "password should be less than 1024 characters" }),
   

})
const loginSchema = z.object({
    
    email:
        z.string({ required_error: "email is required" })
            .trim()
            .email({ message: "email should be valid" })
            .min(3, { message: "email should be at least 3 characters" })
            .max(20, { message: "email should be less than 20 characters" }),
    
    password:
        z.string({ required_error: "password is required" })
            .trim()
            .min(7, { message: "password should be at least 7 characters" })
            .max(1024, { message: "password should be less than 1024 characters" }),

})

module.exports={signupSchema,loginSchema}