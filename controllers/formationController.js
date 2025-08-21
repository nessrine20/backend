const formationModel = require("../models/formationModel");

module.exports.getAllformations = async (req, res) => {
  try {
    //logique
    const formationList = await formationModel.find()

    res.status(200).json({formationList});} 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};