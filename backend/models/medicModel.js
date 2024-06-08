// models/medicModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Medic = sequelize.define('Medic', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
  tableName: 'medics'
});

module.exports = Medic;
