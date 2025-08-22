const notificationModel= require("../models/notificationModel");

module.exports.getAllNotification = async (req, res) => {
  try {
    const List = await notificationModel.find();
    res.status(200).json({ List });
  } catch (error) {
    console.error('getAllnotification error:', error); 
    res.status(500).json({ message: error.message });
  }
};
module.exports.getNotificationById = async (req, res) => {
  try {
    
    const id = req.params.id
    const n  = await notificationModel.findById(id)

    res.status(200).json({notifi});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.createNotification = async (req, res) => {
  try {
    //logique
    const { titre, message, sender, isRead ,isDeleted} = req.body;
    const created = await Notification.create({ titre, message, sender, isRead,isDeleted })

    res.status(200).json({created});
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports.deleteNotificationById = async (req, res) => {
  try {
    const notif = await Notification.findByIdAndDelete(req.params.id);
    if (!notif) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ deleted});
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};
