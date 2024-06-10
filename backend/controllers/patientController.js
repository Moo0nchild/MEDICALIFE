// controllers/patientController.js
const Patient = require('../models/patientModel');
const sequelize = require('../config/db');
const { QueryTypes } = require('sequelize');

exports.addPatient = async (req, res) => {
  const { userID, nombre, apellido, fechaNacimiento, genero, direccion, telefono, email } = req.body;
  
  if (!userID || !nombre || !apellido || !fechaNacimiento || !genero || !direccion || !telefono || !email) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }
  
  try {
    await sequelize.query(
      `INSERT INTO Usuarios (UserID, Nombre, Apellido, FechaNacimiento, Genero, Direccion, Telefono, Email) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      {
        replacements: [userID, nombre, apellido, fechaNacimiento, genero, direccion, telefono, email],
        type: sequelize.QueryTypes.INSERT
      }
    );

    return res.status(201).json({ message: 'Paciente agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar paciente:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};




exports.getAllPatients = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query("SELECT * FROM Usuarios");
    res.json(results);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { userID } = req.body;
    const [updated] = await Patient.update(req.body, {
      where: { userID }
    });
    if (updated) {
      const updatedPatient = await Patient.findOne({ where: { userID } });
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
    const { userID } = req.body;
    const deleted = await Patient.destroy({
      where: { userID }
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
