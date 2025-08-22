const mongoose = require("mongoose");

const formationSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  niveau: { type: String, required: true },
  places_restants:{type:Number},
  capacite:{type:Number },
  prix: { type: String},
  modedepaiement: { type: String, required: true },
}, { timestamps: true });


const formation = mongoose.model("formation", formationSchema);
module.exports = formation;