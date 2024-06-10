// controllers/citaController.js
const sequelize = require('../config/db');

// Obtener todas las citas
exports.getAllCitas = async (req, res) => {
  try {
    const [results] = await sequelize.query('SELECT * FROM Citas');
    res.json(results);
  } catch (error) {
    console.error('Error fetching citas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Agregar una nueva cita
exports.addCita = async (req, res) => {
  const { UserID, DoctorID, FechaHoraCita, Estado } = req.body;
  try {
    const [results] = await sequelize.query(
      'INSERT INTO Citas (UserID, DoctorID, FechaHoraCita, Estado) VALUES (:UserID, :DoctorID, :FechaHoraCita, :Estado)',
      {
        replacements: { UserID, DoctorID, FechaHoraCita, Estado }
      }
    );
    res.status(201).json({ UserID, DoctorID, FechaHoraCita, Estado });
  } catch (error) {
    console.error('Error adding cita:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
