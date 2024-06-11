// routes/medicRoutes.js
const express = require('express');
const router = express.Router();
const medicController = require('../controllers/medicController');

router.post('/medics', medicController.addMedic);
router.get('/medics', medicController.getAllMedics);

module.exports = router;
