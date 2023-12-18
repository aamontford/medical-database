const express = require('express');
const router = express.Router();
const encountersController = require('../controllers/encountersController');

router.post('/start', encountersController.startEncounter);
router.get('/list', encountersController.listEncounters);
router.get('/:id/details', encountersController.getEncounterDetails);

module.exports = router;
