// models/PatientModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Patient = sequelize.define('Patient', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false, 
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  FechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Genero: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  Direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Telefono: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  tableName: 'Usuarios',
});

module.exports = Patient;
