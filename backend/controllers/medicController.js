// controllers/medicController.js
const Medic = require('../models/medicModel');

exports.createMedic = async (req, res) => {
  try {
    const medic = await Medic.create(req.body);
    res.status(201).json(medic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMedics = async (req, res) => {
  try {
    const medics = await Medic.findAll();
    res.status(200).json(medics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
