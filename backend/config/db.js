const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MEDICALIFE', 'root', '141223*', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
