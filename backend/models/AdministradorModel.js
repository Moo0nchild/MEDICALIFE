// models/AdministradorModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Administrador = sequelize.define('Administrador', {
  AdminID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Rol: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Administradores'
});

module.exports = Administrador;
