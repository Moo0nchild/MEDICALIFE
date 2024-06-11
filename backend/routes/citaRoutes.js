    // routes/citaRoutes.js
const express = require('express');
const router = express.Router();
const { getAllCitas, addCita } = require('../controllers/citaController');

router.get('/', getAllCitas);
router.post('/', addCita);

module.exports = router;
