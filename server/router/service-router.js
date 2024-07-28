const express=require('express');
const router=express.Router();

const serviceForm=require('../controller/service-controller');
router.route("/service").get(serviceForm)

module.exports=router