const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  message: { type: String, required: true },
  sender: {type: String},
  isRead: {type: Boolean},
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });


const notification = mongoose.model("notification", notificationSchema);
module.exports = notification;