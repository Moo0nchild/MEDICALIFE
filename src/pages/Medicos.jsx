import React, { useState } from 'react';
import AddMedicButton from '../components/AddMedicButton';
import SearchMedicButton from '../components/SearchMedicButton';
import MedicGrid from '../components/MedicGrid';
import AddSpecialtyButton from '../components/AddSpecialtyButton';
import {Header} from '../health/components/Header';
import Box from '@mui/material/Box';

export const Medicos = () => {
  const [medics, setMedics] = useState([]);
  const [specialties, setSpecialties] = useState(['Cardiología', 'Dermatología', 'Neurología', 'Oncología', 'Pediatría', 'Psiquiatría']);

  const addMedic = (medic) => {
    setMedics([...medics, medic]);
  };

  const addSpecialty = (specialty) => {
    setSpecialties([...specialties, specialty]);
  };
  return (
      <>
      <Box sx={{ display: 'flex' }}>
          <Header/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div>
              <h1>AGREGAR MÉDICO</h1>
              <AddMedicButton onAddMedic={addMedic} specialties={specialties} />
              <SearchMedicButton />
              <MedicGrid medics={medics} />
              <h1>AGREGAR ESPECIALIDAD</h1>
              <AddSpecialtyButton onAddSpecialty={addSpecialty} />
            </div>
          </Box>
      </Box>
      </>
  )
}

export default Medicos;