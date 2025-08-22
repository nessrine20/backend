var express = require('express');
var router = express.Router();
const inscripController = require('../controllers/inscripController');

router.get('/getAllSession',inscripController.getAllinscriptions)
router.get('/getSessionById/:id',inscripController.getInscriptionById  )
router.post('/createSession',inscripController.createinscription)
router.delete('/DeleteSessionById/:id',inscripController.DeleteInscriptionById)

module.exports = router;
