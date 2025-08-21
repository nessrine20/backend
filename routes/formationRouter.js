var express = require('express');
var router = express.Router();
const formationController = require('../controllers/formationController')
/* GET home page. */
router.get('/getAllformations',formationController.getAllformations )