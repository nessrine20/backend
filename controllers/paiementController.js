const paiement = require('../models/paiementModel');


module.exports.createpaiement = async (req, res) => {
  try {
    //logique
    const { montant, statut,methode, ispayed} = req.body;
    const created = await paiement.create({ montant, statut,methode, ispayed})

    res.status(200).json({created});
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.getAllPaiements = async (req, res) => {
  try {
    const list = await Paiement.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({ paiementslist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports.getPaiementById = async (req, res) => {
  try {
    const p = await Paiement.findById(req.params.id);
    if (!p) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ paiement: p });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.DeletePaiementById = async (req, res) => {
  try {
    //logique
    const id = req.params.id
    const checkIfPaiementExists = await paiementModel.findById(id);
    if(!checkIfPaiementExists){
      throw new Error("paiement not Found!");
    }
    await userModel.findByIdAndDelete(id)
    res.status(200).json("deleted");
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};
