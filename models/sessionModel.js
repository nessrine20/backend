const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
nombre:{type:Number},
date_debut:Date,
date_fin: Date,
issaved:{type:Boolean,default:true},
isstarted:{type:Boolean,default:false},
isdeleted:{type:Boolean,default:false},
})

const session = mongoose.model("session", sessionSchema);
module.exports = session;