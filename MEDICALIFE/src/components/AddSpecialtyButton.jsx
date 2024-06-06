import React, { useState } from 'react';
import AddSpecialtyForm from './AddSpecialtyForm';

const AddSpecialtyButton = ({ onAddSpecialty }) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Agregar Especialidad</button>
      {showForm && <AddSpecialtyForm onClose={handleCloseForm} onAddSpecialty={onAddSpecialty} />}
    </div>
  );
};

export default AddSpecialtyButton;
