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
              <td>{patient.userID}</td>
              <td>{patient.nombre}</td>
              <td>{patient.apellido}</td>
              <td>{patient.fechaNacimiento}</td>
              <td>{patient.genero}</td>
              <td>{patient.direccion}</td>
              <td>{patient.telefono}</td>
              <td>{patient.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientGrid;
