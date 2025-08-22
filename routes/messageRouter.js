var express = require('express');
var router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/getAllMessages',messageController.getAllMessages)
router.get('/getMessageById /:id',messageController.getMessageById  )
router.post('/CreateMessage',messageController.CreateMessage)
router.delete('/deleteMessageById/:id',messageController.deleteMessageById)

module.exports = router;
