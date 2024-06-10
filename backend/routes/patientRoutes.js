// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/patients', patientController.addPatient);
router.get('/patients', patientController.getAllPatients);
router.put('/patients/:cedula', patientController.updatePatient);
router.delete('/patients/:cedula', patientController.deletePatient);

module.exports = router;
