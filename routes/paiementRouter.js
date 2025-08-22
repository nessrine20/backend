var express = require('express');
var router = express.Router();
const paiementController = require('../controllers/paiementController')

router.get('/getAllpaiement',paiementController.getAllPaiements)
router.get('/getpaiementById',paiementController.getPaiementById )
router.post('/createpaiement',paiementController.createpaiement)
router.delete('/deletepaiementById',paiementController.DeletePaiementById)
module.exports = router;