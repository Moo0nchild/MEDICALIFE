import React from 'react';

const AppointmentGrid = ({ appointments }) => {
  return (
    <div>      <h2>Lista de Citas</h2>
    <table>
      <thead>
        <tr>
          <th>Paciente</th>
          <th>Médico</th>
          <th>Fecha y Hora</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.patientName}</td>
            <td>{appointment.doctorName}</td>
            <td>{new Date(appointment.FechaHoraCita).toLocaleString()}</td>
            <td>{appointment.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default AppointmentGrid;
