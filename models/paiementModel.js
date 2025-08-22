const mongoose = require("mongoose");
const paiementSchema = new mongoose.Schema({

montant: {type: Number},
statut:{type: String},
methode:{type:String},
ispayed:{type:Boolean,default:false},
})

const paiement = mongoose.model("paiement", paiementSchema);
module.exports = paiement;