// models/medicModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Medic = sequelize.define('Medic', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Medicos'
});

module.exports = Medic;
