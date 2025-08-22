const message = require("../models/messageModel");
const messageModel = require("../models/messageModel");


module.exports.CreateMessage = async (req, res) => {
  try {
    //logique
    const {contenu, date_envoi,issent} = req.body;
    const created = await message.create({contenu, date_envoi,issent})
    res.status(200).json({created});
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getMessageById = async (req, res) => {
  try {
    
    const id = req.params.id
    const n  = await messageModel.findById(id)

    res.status(200).json({message});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllMessages= async (req, res) => {
  try {
    const messagesList = await messageModel.find();
    res.status(200).json({ messagesList });
  } 
  catch (error) {
    console.error('getAllMessages error:', error); 
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteMessageById = async (req, res) => {
  try {
    const message = await message.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ deleted});
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};


