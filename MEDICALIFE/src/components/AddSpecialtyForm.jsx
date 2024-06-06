import React, { useState } from 'react';

const AddSpecialtyForm = ({ onClose, onAddSpecialty }) => {
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSpecialty(specialty);
    onClose();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Especialidad:</label>
          <input 
            type="text" 
            value={specialty} 
            onChange={(e) => setSpecialty(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Agregar Especialidad</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default AddSpecialtyForm;
