const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cita = sequelize.define('Cita', {
  CitaID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuarios',
      key: 'UserID'
    }
  },
  DoctorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Medicos',
      key: 'DoctorID'
    }
  },
  FechaHoraCita: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Estado: {
    type: DataTypes.STRING,
    allowNull: true
  },
  DoctorName: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  UserName: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
}, {
  tableName: 'Citas',
  timestamps: false
});

module.exports = Cita;
