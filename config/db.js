const mongoose = require("mongoose")

module.exports.conneccttoMongoDB = async()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.Url_Mongo).then(()=>{console.log("connect to db")}
).catch(
    (error)=>(console.log(error))
    )

}
//lqojZVtAvk3Ct4Jp
//nesshnainia
