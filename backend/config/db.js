const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MEDICALIFE', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
