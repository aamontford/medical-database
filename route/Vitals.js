const express = require('express');
const router = express.Router();
const vitalsController = require('../controllers/vitalsController');

router.post('/submit', vitalsController.submitVitals);

module.exports = router;
