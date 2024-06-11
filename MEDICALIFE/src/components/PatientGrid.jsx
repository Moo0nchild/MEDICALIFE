// components/PatientGrid.js
import React, { useState, useEffect } from 'react';
import patientService from '../services/patientService';
import SearchPatientButton from './SearchPatientButton';

const PatientGrid = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await patientService.getAllPatients();
        setPatients(patientsData);
        setFilteredPatients(patientsData); // Inicialmente, mostrar todos los pacientes
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleSearch = (searchText) => {
    const lowercasedFilter = searchText.toLowerCase();
    const filteredData = patients.filter(patient =>
      Object.keys(patient).some(key =>
        String(patient[key]).toLowerCase().includes(lowercasedFilter)
      )
    );
    setFilteredPatients(filteredData);
  };

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <SearchPatientButton onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Género</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.UserID}</td>
              <td>{patient.Nombre}</td>
              <td>{patient.Apellido}</td>
              <td>{patient.FechaNacimiento}</td>
              <td>{patient.Genero}</td>
              <td>{patient.Direccion}</td>
              <td>{patient.Telefono}</td>
              <td>{patient.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientGrid;
