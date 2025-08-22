const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({

contenu: String,
date_envoi: Date,
issent:{type: Boolean,default:false},


})
const message = mongoose.model("message", messageSchema);
module.exports = message;