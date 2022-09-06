var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others')
/* GET index */

router.get('/', ctrlMain.index);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlOthers.addReview);

router.get('/', ctrlMain.index);

module.exports = router;
