// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const bcrypt = require('bcrypt');

const patientRoutes = require('./routes/patientRoutes');
const medicRoutes = require('./routes/medicRoutes');
const specialtyRoutes = require('./routes/specialtyRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const citaRoutes = require('./routes/citaRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
const port = 5000; 

app.use('/api', patientRoutes);
app.use('/api', medicRoutes);
app.use('/api', specialtyRoutes);
app.use('/api', appointmentRoutes);
app.use('/api/citas', citaRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to sync the database:', error);
});
