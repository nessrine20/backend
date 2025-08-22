const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
 nom : String,
}, { timestamps: true });


const categorie= mongoose.model("categorie", categorieSchema);
module.exports = categorie;