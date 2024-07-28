// middleware use as check router middle function for check validaty

const adminMiddeleware=(req,res,next)=>{
console.log("admin user",req.user.admin)
    if(req.user.admin){
        console.log("User is Admin")

        next()
    }else{
        console.log("User is not Admin Access denied")
        res.status(401).send("Unauthorized")
        
    }
}

module.exports=adminMiddeleware