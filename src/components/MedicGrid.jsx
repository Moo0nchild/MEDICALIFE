// src/components/MedicGrid.jsx
import React, { useState, useEffect } from 'react';
import doctorService from '../services/doctorService';


const MedicGrid = () => {
  const [medics, setMedics] = useState([]);
  const [filteredMedics, setFilteredMedics] = useState([]);

  useEffect(() => {
    const fetchMedics = async () => {
      try {
        const medicsData = await doctorService.getAllDoctors();
        setMedics(medicsData);
        setFilteredMedics(medicsData); // Inicialmente, mostrar todos los médicos
      } catch (error) {
        console.error('Error fetching medics:', error);
      }
    };

    fetchMedics();
  }, []);

  const handleSearch = (searchText) => {
    const lowercasedFilter = searchText.toLowerCase();
    const filteredData = medics.filter(medic =>
      Object.keys(medic).some(key =>
        String(medic[key]).toLowerCase().includes(lowercasedFilter)
      )
    );
    setFilteredMedics(filteredData);
  };

  return (
    <div>
      <h2>Lista de Médicos</h2>
      
      <table>
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedics.map((medic, index) => (
            <tr key={index}>
              <td>{medic.DoctorID}</td>
              <td>{medic.Nombre}</td>
              <td>{medic.Especialidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicGrid;
