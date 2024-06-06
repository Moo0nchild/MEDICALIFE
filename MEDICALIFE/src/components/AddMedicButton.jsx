import React, { useState } from 'react';
import AddMedicForm from './AddMedicForm';

const AddMedicButton = ({ onAddMedic, specialties }) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Agregar Médico</button>
      {showForm && <AddMedicForm onClose={handleCloseForm} onAddMedic={onAddMedic} specialties={specialties} />}
    </div>
  );
};

export default AddMedicButton;
