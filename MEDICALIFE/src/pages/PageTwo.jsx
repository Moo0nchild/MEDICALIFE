import React, { useState } from 'react';
import AddMedicButton from '../components/AddMedicButton';
import SearchMedicButton from '../components/SearchMedicButton';
import MedicGrid from '../components/MedicGrid';
import AddSpecialtyButton from '../components/AddSpecialtyButton';

export const PageTwo = () => {
  const [medics, setMedics] = useState([]);
  const [specialties, setSpecialties] = useState(['Cardiología', 'Dermatología', 'Neurología', 'Oncología', 'Pediatría', 'Psiquiatría']);

  const addMedic = (medic) => {
    setMedics([...medics, medic]);
  };

  const addSpecialty = (specialty) => {
    setSpecialties([...specialties, specialty]);
  };

  return (
    <div>
      <h1>AGREGAR MÉDICO</h1>
      <AddMedicButton onAddMedic={addMedic} specialties={specialties} />
      <SearchMedicButton />
      <MedicGrid medics={medics} />
      <h1>AGREGAR ESPECIALIDAD</h1>
      <AddSpecialtyButton onAddSpecialty={addSpecialty} />
    </div>
  );
};

