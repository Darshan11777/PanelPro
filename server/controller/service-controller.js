const Service=require('../models/service-model')

const serviceController = async (req, res) => {
    try {
        
        let services = await Service.find({})
        console.log("service", services)
       return res.status(200).json(services)
    } catch (error) {
        console.log("service error", error);
    }
    
}
module.exports = serviceController