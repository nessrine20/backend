const incscripModel = require("../models/inscripModel");


module.exports.createinscription = async (req, res) => {
  try {
    //logique
    const {domaine, date,isinscri} = req.body;
    const created = await session.create({domaine, date,isinscri}  )

    res.status(200).json({created});
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.getAllinscriptions = async (req, res) => {
  try {
    const inscriptionList = await incscripModel.find();
    res.status(200).json({ inscriptionList });
  } catch (error) {
    console.error( error); 
    res.status(500).json({ message: error.message });
  }
};
module.exports.getInscriptionById = async (req, res) => {
  try {
    
    const id = req.params.id
    const n  = await incscripModel.findById(id)

    res.status(200).json({inscription});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.DeleteInscriptionById = async (req, res) => {
  try {
    //logique
    const id = req.params.id
    const checkIfInscripnExists = await incscripModel.findById(id);
    if(!checkIfInscripnExists ){
      throw new Error("inscrip  mafamech!");
    }

    await incscripModel.findByIdAndDelete(id)

    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
