// controllers/medicController.js
const Medic = require('../models/medicModel');

exports.addDoctor = async (req, res) => {
  const { nombre, especialidad } = req.body;
  
  if (!nombre || !especialidad) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }
  
  try {
    await sequelize.query(
      `INSERT INTO Medicos (Nombre, Especialidad) 
      VALUES (?, ?)`,
      {
        replacements: [nombre, especialidad],
        type: sequelize.QueryTypes.INSERT
      }
    );

    return res.status(201).json({ message: 'Médico agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar médico:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.getAllMedics = async (req, res) => {
  try {
    const medics = await Medic.findAll();
    res.json(medics);
  } catch (error) {
    console.error('Error fetching medics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};