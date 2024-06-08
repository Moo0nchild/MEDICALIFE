// models/specialtyModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Specialty = sequelize.define('Specialty', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'specialties'
});

module.exports = Specialty;
