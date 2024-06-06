import React, { useState } from 'react';
import AddPatientForm from './AddPatientForm';

const AddPatientButton = ({ onAddPatient }) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Agregar Paciente</button>
      {showForm && <AddPatientForm onClose={handleCloseForm} onAddPatient={onAddPatient} />}
    </div>
  );
};

export default AddPatientButton;
