import React, { useState } from 'react';
import AddPatientButton from '../components/AddPatientButton';
import PatientGrid from '../components/PatientGrid';
import {Header} from '../health/components/Header';
import Box from '@mui/material/Box';

export const PageOne = () => {
    const [patients, setPatients] = useState([]);

    const addPatient = (patient) => {
      setPatients([...patients, patient]);
    };
    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <Header/>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <div>
                <h1>AGREGAR PACIENTE</h1>
                <AddPatientButton onAddPatient={addPatient} />
                
                <PatientGrid patients={patients} />
              </div>
            </Box>
        </Box>
        </>
    )
}

export default PageOne;

