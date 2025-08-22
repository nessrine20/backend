var express = require('express');
var router = express.Router();
const categorieController = require('../controllers/categorieController');

/* GET home page. */
router.get('/getAllCategories',categorieController.getAllCategories )
router.get('/getCategorieById',categorieController.getCategorieById)
router.post('/createCategorie',categorieController.createCategorie)
router.delete('/DeleteCategorieById/:titre',categorieController.DeleteCategorieById)

module.exports = router;