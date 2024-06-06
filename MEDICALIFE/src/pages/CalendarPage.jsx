import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentGrid from '../components/AppointmentGrid';

const CalendarPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [patientCedula, setPatientCedula] = useState('');
  const [patientName, setPatientName] = useState('');
  const [appointmentDescription, setAppointmentDescription] = useState('');

  const addAppointment = (e) => {
    e.preventDefault();
    setAppointments([...appointments, { date, patientCedula, patientName, description: appointmentDescription }]);
    setPatientCedula('');
    setPatientName('');
    setAppointmentDescription('');
  };

  return (
    <div>
      <h1>Gestionar Citas</h1>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <h2>Agregar Cita</h2>
      <form onSubmit={addAppointment}>
        <div>
          <label>Cédula del Paciente:</label>
          <input 
            type="text" 
            value={patientCedula} 
            onChange={(e) => setPatientCedula(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Nombre del Paciente:</label>
          <input 
            type="text" 
            value={patientName} 
            onChange={(e) => setPatientName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Descripción de la Cita:</label>
          <input 
            type="text" 
            value={appointmentDescription} 
            onChange={(e) => setAppointmentDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Fecha de la Cita:</label>
          <input 
            type="date" 
            value={date.toISOString().split('T')[0]} 
            onChange={(e) => setDate(new Date(e.target.value))} 
            required 
          />
        </div>
        <button type="submit">Agregar Cita</button>
      </form>
      <AppointmentGrid appointments={appointments} />
    </div>
  );
};

export default CalendarPage;
