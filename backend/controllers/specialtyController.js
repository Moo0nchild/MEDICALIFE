// controllers/specialtyController.js
const Specialty = require('../models/specialtyModel');

exports.createSpecialty = async (req, res) => {
  try {
    const specialty = await Specialty.create(req.body);
    res.status(201).json(specialty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.findAll();
    res.status(200).json(specialties);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
