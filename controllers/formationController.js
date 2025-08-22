const formationModel = require("../models/formationModel");

module.exports.getAllformations = async (req, res) => {
  try {
    const formationList = await formationModel.find().lean();
    res.status(200).json({ formationList });
  } catch (error) {
    console.error('getAllformations error:', error); // log utile
    res.status(500).json({ message: error.message });
  }
};

module.exports.searchformationsByName = async (req, res) => {
//logique
  try {
    const { titre } = req.body;

    if (!titre) {
      throw new Error("Please select a formation");
    }

    const formationList = await formationModel.find({
      titre: { $regex: titre, $options: "i" }, // Debut
      //firstName: {$regex : `${name}$` , $options: "i" } Fin
    });
    if (formationList.length === 0) {
      throw new Error("Aucune formations");
    }
    res.status(200).json({ formationList });
  }
   catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.addFormation = async (req, res) => {
  try {
    const { titre, description, niveau, prix, places_restants,capacite } = req.body.t;

    const created = await formationModel.create({titre,description,niveau ,prix: String(prix),places_restants,capacite});

    return res.status(201).json({ message: "Formation créée", formation: created });
  } catch (error) {
    console.error("addFormation error:", error);
    return res.status(500).json({ message: error.message });
  }
};


module.exports.deleteFormationByName = async (req, res) => {
  try {
    const { titre } = req.params.titre;
    if (!titre) {
      return res.status(400).json({ message: "Paramètre 'titre' requis" });
    }

    const deleted = await formationModel.findOneAndDelete({ titre });
    if (!deleted) {
      return res.status(404).json({ message: "Formation non trouvée" });
    }

    return res.status(200).json({ message: "deleted", formation: deleted });
  } catch (error) {
    console.error("deleteFormationByName error:", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
