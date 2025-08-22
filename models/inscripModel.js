const mongoose= require ("mongoose");
const inscriSchema= new mongoose.Schema({

    date_isncription: Date,
    domaine: String,
    isinscri:Boolean,
})

const inscription = mongoose.model("inscription", inscriSchema);
module.exports = inscription;