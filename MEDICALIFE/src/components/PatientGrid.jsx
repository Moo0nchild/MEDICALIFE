import React from 'react';

const PatientGrid = ({ patients }) => {
  return (
    <div>
      <h2>Lista de Pacientes</h2>
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
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.cedula}</td>
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
