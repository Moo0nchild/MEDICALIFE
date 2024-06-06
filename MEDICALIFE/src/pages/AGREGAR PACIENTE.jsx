import React, { useState } from 'react';
import AddPatientButton from '../components/AddPatientButton';
import SearchPatientButton from '../components/SearchPatientButton';
import PatientGrid from '../components/PatientGrid';

const Page1 = () => {
  const [patients, setPatients] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  return (
    <div>
      <h1>AGREGAR PACIENTE</h1>
      <AddPatientButton onAddPatient={addPatient} />
      <SearchPatientButton />
      <PatientGrid patients={patients} />
    </div>
  );
};

export default Page1;
