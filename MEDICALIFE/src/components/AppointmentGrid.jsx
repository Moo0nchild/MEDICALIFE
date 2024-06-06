import React from 'react';

const AppointmentGrid = ({ appointments }) => {
  return (
    <div>
      <h2>Lista de Citas</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cédula del Paciente</th>
            <th>Nombre del Paciente</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{appointment.patientCedula}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentGrid;
