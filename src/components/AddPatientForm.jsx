import React, { useState } from 'react';
import patientService from '../services/patientService';

const AddPatientForm = () => {
  const [userData, setUserData] = useState({
    userID: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    genero: '',
    direccion: '',
    telefono: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar los datos del paciente al backend para ser agregados a la base de datos
      await patientService.addPatient(userData);
      // Limpiar el formulario después de agregar el paciente
      setUserData({
        userID: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        genero: '',
        direccion: '',
        telefono: '',
        email: ''
      });
      // Mostrar un mensaje de éxito
      alert('Paciente agregado exitosamente');
    } catch (error) {
      console.error('Error al agregar paciente:', error);
      // Mostrar un mensaje de error si ocurre algún problema al agregar el paciente
      alert('Error al agregar paciente. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="form-container">
      <h2>Añadir Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userID">ID de Usuario:</label>
          <input type="text" id="userID" name="userID" value={userData.userID} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={userData.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={userData.apellido} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={userData.fechaNacimiento} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="genero">Género:</label>
          <select id="genero" name="genero" value={userData.genero} onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={userData.direccion} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={userData.telefono} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
        </div>
        <button type="submit">Añadir Paciente</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
