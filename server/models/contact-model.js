
const {Schema,model,default:mongoose}=require('mongoose')

const contactSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:Array,
        required:true
    }
})

// create model or collection
const Contact=new model('Contact',contactSchema);
module.exports=Contact;