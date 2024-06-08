// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MEDICALIFE', 'root', '141223*', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    options: {
      enableArithAbort: true
    }
  },
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
