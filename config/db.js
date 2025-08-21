const mongoose = require("mongoose")

module.exports.connecttoMongoDB = async () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.Url_Mongo).then(()=>{console.log("connect to db")}
).catch(
    (error)=>{console.log(error)}
  )
}
//b1: users
//lqojZVtAvk3Ct4Jp
//nesshnainia
//p0/b2: nesshnainia:d4kZw7N1jtczGVWf
//mongodb+srv://nesshnainia:d4kZw7N1jtczGVWf@cluster0.j9xrirx.mongodb.net/