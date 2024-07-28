const Contact=require('../models/contact-model')
const contactForm=async(req,res)=>{
// 
    try {

        const {userName,email,message}=req.body
        console.log({userName,email,message});
        // Contact.create({userName,email,message})

        const contactExist = await Contact.findOne({ email }).exec();
        if (contactExist) {
            contactExist.message.push(message);
            await contactExist.save();
        } else {
            await Contact.create({ userName, email, message: [message] });
        }
        // const newContact=new Contact({userName,email,message})
        // newContact.save()
        
        console.log({status:"message send successfully",massage:{userName,email,message:[message]}});
        res.status(200).json({status:"message send successfully",massage:{userName,email,message}})

    } catch (error) {
        console.log(error);
        res.status(500).json({massage:error.message,extraMassage:"message not send"})
    }
    
}


// method no 2

// const contactForm=async(req,res)=>{

//     try {
//         const response=req.body
//         await Contact.create(response)
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({massage:error.message})
//     }
    
// }

module.exports=contactForm