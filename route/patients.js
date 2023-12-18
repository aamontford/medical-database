const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patientsController');

router.post('/register', patientsController.registerPatient);

module.exports = router;
