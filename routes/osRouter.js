var express = require('express');
var router = express.Router();
const os = require ('os')
const osController = require('../controllers/osController')
/* GET home page. */
router.get('/getOsInformation',osController.getOsInformation )

//router.get('/getOsInformation', function(req, res, next) {
   // try {
       // const osInformation = {
       // hostname : os.hostname(),
        //platform : os.platform(),
       // release: os.release(),
   // type: os.type(),

     //   }
       // console.log(osInformation)
        //res.status(200).json(osInformation)
    //} catch (error) {
      //  res.status(500).json({message: error.message})
    //}
//});

module.exports = router;
