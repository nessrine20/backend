const categorieModel = require("../models/categorieModel");

module.exports.createCategorie = async (req, res) => {
  try {
    //logique
    const {nom} = req.body;
    const created = await Categorie.create({nom})
    res.status(200).json({created});
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllCategories = async (req, res) => {
  try {
    const CategorieList = await CategoriepModel.find();
    res.status(200).json({ CategorieList });
  } catch (error) {
    console.error( error); 
    res.status(500).json({ message: error.message });
  }
};

module.exports.getCategorieById = async (req, res) => {
  try {
    
    const id = req.params.id
    const n = await CategorieModel.findById(id)

    res.status(200).json({Categorie});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.DeleteCategorieById = async (req, res) => {
  try {
    //logique
    const id = req.params.id
    const checkIfCategorieExists = await CategorieModel.findById(id);
    if(!checkIfCategorieExists){
      throw new Error("Categorie mafamech!");
    }

    await categorieModel.findByIdAndDelete(id)

    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
