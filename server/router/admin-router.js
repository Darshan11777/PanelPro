// use as route for app fuction
// like get,delete patch and decide path
// 
const express=require("express");
const router=express.Router();
const authMiddleware=require("../middlewares/auth-middleware");
const adminMiddleware=require("../middlewares/admin-middleware");
const {adminForm,deleteUser,userIdDetails,editUser}=require("../controller/admin-controller");


router.route("/user").get(authMiddleware,adminMiddleware,adminForm)

router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware,deleteUser)
router.route("/user/:id").get(authMiddleware,adminMiddleware,userIdDetails)
router.route("/user/edit/:id").patch(editUser)
module.exports=router