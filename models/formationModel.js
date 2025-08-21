const mongoose = require("mongoose");

const formationSchema = new mongoose.Schema({

    

titre : String,
description : String,
niveau: String,
prix: {type:Number},
modedepaiement : String,
formation_image: String,

})

const formation = mongoose.model("formation", formationSchema);
module.exports = formation;