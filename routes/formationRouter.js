var express = require('express');
var router = express.Router();
const formationController = require('../controllers/formationController');

/* GET home page. */
router.get('/getAllformations',formationController.getAllformations )
router.get('/searchformationsByName',formationController.searchformationsByName )
router.post('/addformation',formationController.addFormation)
router.delete('/deleteFormationByName/:titre',formationController.deleteFormationByName )

module.exports = router;