// controllers/authController.js
const bcrypt = require('bcrypt');
const Administrador = require('../models/AdministradorModel');

exports.login = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const admin = await Administrador.findOne({ where: { Usuario: usuario } });

    if (!admin) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, admin.Contrasena);
    return res.status(401).json({ user: usuario, pass: password, admin: admin, isMatch: isMatch});

    // if (!isMatch) {
    //   return res.status(401).json({ message: 'Contraseña incorrecta' });
    // }

    res.json({ message: 'Inicio de sesión exitoso', rol: admin.Rol });
  } catch (error) {
    console.error('Error al autenticar:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
