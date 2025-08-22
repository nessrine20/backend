const session = require('../models/sessionModel');


module.exports.createSession = async (req, res) => {
  try {
    //logique
    const { nombre, date_debut,date_fin, issaved,isstarted,isdeleted} = req.body;
    const created = await session.create({ nombre, date_debut,date_fin, issaved,isstarted,isdeleted} )

    res.status(200).json({created});
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllSession  = async (req, res) => {
  try {
    //logique
    const sessionList = await sessionModel.find()

    res.status(200).json({sessionList});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllSessionById  = async (req, res) => {
  try {
    //logique
    const id = req.params.id
    const sessionList = await sessionModel.find(id)

    res.status(200).json({sessionList});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.AddSession = async (req, res) => {
  try {
    //logique
    const { nombre, date_debut,date_fin, issaved,isstarted,isdeleted}=req.body
    const session = new sessionModel({ nombre, date_debut,date_fin, issaved,isstarted,isdeleted})
    const addedsession = await session.save()
    res.status(200).json(addedsession );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.DeleteSessionById = async (req, res) => {
  try {
    //logique
    const id = req.params.id
    const checkIfSessionExists = await sessionModel.findById(id);
    if(!checkIfSessionExists){
      throw new Error("session mafamech!");
    }

    await sessionModel.findByIdAndDelete(id)

    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
