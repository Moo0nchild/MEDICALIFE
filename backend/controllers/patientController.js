// controllers/patientController.js
const Patient = require('../models/patientModel');

exports.createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { cedula } = req.params;
    const [updated] = await Patient.update(req.body, {
      where: { cedula }
    });
    if (updated) {
      const updatedPatient = await Patient.findOne({ where: { cedula } });
      res.status(200).json(updatedPatient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const { cedula } = req.params;
    const deleted = await Patient.destroy({
      where: { cedula }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
