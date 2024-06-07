import React, { useState, useEffect } from 'react';
import AddPatientButton from '../components/AddPatientButton';
import SearchPatientButton from '../components/SearchPatientButton';
import PatientGrid from '../components/PatientGrid';
import patientService from '../services/patientService';

const Page1 = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const data = await patientService.getPatients();
      setPatients(data);
    };
    fetchPatients();
  }, []);

  const addPatient = async (patient) => {
    const newPatient = await patientService.addPatient(patient);
    setPatients([...patients, newPatient]);
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