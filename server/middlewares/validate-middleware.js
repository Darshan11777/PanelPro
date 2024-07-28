

const validate = (schema) => async (req, res, next) => {
    try {
        
        req.body = await schema.parseAsync(req.body)
           
        next()
    } catch (error) {
        
        const allMassage="FIll the input properly"
        const extraDetails=error.errors.map(err=>err.message)
        const status=422
        console.log("validate ERROR ",allMassage);
        console.log(req.body);
        
        const err={
            statusCode:status,
            message:allMassage,
            extraDetails
        }
        next(err)
    }
}
module.exports=validate