import React, { useState } from 'react';

const AddMedicForm = ({ onClose, onAddMedic, specialties }) => {
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMedic({ nombre, especialidad });
    onClose();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Especialidad:</label>
          <select value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} required>
            <option value="">Seleccionar especialidad</option>
            {specialties.map((especialidad, index) => (
              <option key={index} value={especialidad}>{especialidad}</option>
            ))}
          </select>
        </div>
        <button type="submit">Agregar Médico</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default AddMedicForm;
