var express = require('express');
var router = express.Router();
const sessionController= require('../controllers/sessionController')

router.get('/getAllSession',sessionController.getAllSession)
router.get('/getSessionById/:id',sessionController.getAllSessionById  )
router.post('/createSession',sessionController.createSession)
router.post('/addSession',sessionController.AddSession)
router.delete('/DeleteSessionById/:id',sessionController.DeleteSessionById)


module.exports = router;