const mongoose = require("mongoose");

const avisSchema = new mongoose.Schema({
 note:String,
 commentaire:String,



}, { timestamps: true });

const avis = mongoose.model("avis", avisSchema);
module.exports = avis;

//http://color.adobe.com
//https://color.adobe.com/fr/create/color-wheel
//https://m3.material.io/styles/color/system/overview