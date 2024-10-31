const errorMiddleWear = (req , res , err , next) =>{
    const statuscode = statuscode? statuscode : 4000 
    if(statuscode){
        res.send(statuscode)
        res.json({
            message : err.message,
            stack: process.env.NODE_ENV=== 'development'? err.stack : null
        })
    }
}
module.exports = errorMiddleWear 