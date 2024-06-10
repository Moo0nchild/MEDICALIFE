import React, { useState } from 'react';
import doctorService from '../services/doctorService';

const AddDoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    nombre: '',
    especialidad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar los datos del médico al backend para ser agregados a la base de datos
      await doctorService.addDoctor(doctorData);
      // Limpiar el formulario después de agregar el médico
      setDoctorData({
        nombre: '',
        especialidad: ''
      });
      // Mostrar un mensaje de éxito
      alert('Médico agregado exitosamente');
    } catch (error) {
      console.error('Error al agregar médico:', error);
      // Mostrar un mensaje de error si ocurre algún problema al agregar el médico
      alert('Error al agregar médico. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="form-container">
      <h2>Añadir Médico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={doctorData.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="especialidad">Especialidad:</label>
          <input type="text" id="especialidad" name="especialidad" value={doctorData.especialidad} onChange={handleChange} required />
        </div>
        <button type="submit">Añadir Médico</button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
