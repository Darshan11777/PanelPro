const express=require('express');
const router=express.Router();
const {register,login,user}=require('../controller/auth-controller')
const validate=require('../middlewares/validate-middleware')
const authMiddleware=require('../middlewares/auth-middleware')
const {signupSchema,loginSchema}=require('../validators/auth-validtor')
router.get("/",(req,res)=>{
  res.status(200).send("Hello Worlds of user!");
})
// router.get("/register",register)
router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(validate(loginSchema),login)
router.route("/user").get(authMiddleware,user)
// router.post("/register",register)
// router.post("/login",login)
module.exports=router