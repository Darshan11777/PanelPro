const {model,Schema}=require('mongoose')

const serviceSchema=new Schema({
    name:{
        type:String,
    required:true
    },
    poster:{
        type:String,
    required:true
    },
    genres:{
        type:Array,
    required:true
    },
    releaseYear:{
        type:Number,
        
    required:true
    }
})
// you can connect to database collection without capital "s" "services" or just "service"
 
module.exports=model('Services',serviceSchema)