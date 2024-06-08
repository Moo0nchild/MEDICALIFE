// routes/specialtyRoutes.js
const express = require('express');
const router = express.Router();
const specialtyController = require('../controllers/specialtyController');

router.post('/specialties', specialtyController.createSpecialty);
router.get('/specialties', specialtyController.getAllSpecialties);

module.exports = router;
