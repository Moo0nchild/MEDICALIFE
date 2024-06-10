// src/components/AddDoctorForm.jsx
import React, { useState } from 'react';
import doctorService from '../services/doctorService';

const AddDoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    id: '',
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
      await doctorService.addDoctor(doctorData);
      setDoctorData({
        id: '',
        nombre: '',
        especialidad: ''
      });
      alert('Médico agregado exitosamente');
    } catch (error) {
      console.error('Error al agregar médico:', error);
      alert('Error al agregar médico. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="form-container">
      <h2>Añadir Médico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" value={doctorData.id} onChange={handleChange} required />
        </div>
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
