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
          
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.UserName}</td>
            <td>{appointment.DoctorName}</td>
            <td>{new Date(appointment.FechaHoraCita).toLocaleString()}</td>
            <td>{appointment.Estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default AppointmentGrid;
