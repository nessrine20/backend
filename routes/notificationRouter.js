var express = require('express');
var router = express.Router();
const notificationController = require('../controllers/notificationController')

router.get('/getAllNotification',notificationController.getAllNotification )
router.get('/getNotificationById',notificationController.getNotificationById )
router.post('/createNotification',notificationController.createNotification)
router.delete('/deleteNotificationById',notificationController.deleteNotificationById)
module.exports = router;