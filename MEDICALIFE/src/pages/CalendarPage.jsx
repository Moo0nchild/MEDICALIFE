// src/components/CalendarPage.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentGrid from '../components/AppointmentGrid';
import citaService from '../services/citaService';
import patientService from '../services/patientService';
import doctorService from '../services/doctorService';

const CalendarPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [patientID, setPatientID] = useState('');
  const [doctorID, setDoctorID] = useState('');
  const [appointmentDescription, setAppointmentDescription] = useState('');
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [patientsData, doctorsData, appointmentsData] = await Promise.all([
          patientService.getAllPatients(),
          doctorService.getAllDoctors(),
          citaService.getAllCitas(),
        ]);
        setPatients(patientsData);
        setDoctors(doctorsData);
        setAppointments(appointmentsData);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();
  }, []);

  const addAppointment = async (e) => {
    e.preventDefault();
    try {
      const newAppointment = {
        UserID: patientID,
        DoctorID: doctorID,
        FechaHoraCita: date.toISOString(),
        Estado: 'Programada',
        Descripcion: appointmentDescription,
      };
      await citaService.addCita(newAppointment);
      setAppointments([...appointments, newAppointment]);
      setPatientID('');
      setDoctorID('');
      setAppointmentDescription('');
      alert('Cita agregada exitosamente');
    } catch (error) {
      console.error('Error adding appointment:', error);
      alert('Error al agregar cita. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h1>Gestionar Citas</h1>
      <Calendar onChange={setDate} value={date} />
      <h2>Agregar Cita</h2>
      <form onSubmit={addAppointment}>
        <div>
          <label>Paciente:</label>
          <select value={patientID} onChange={(e) => setPatientID(e.target.value)} required>
            <option value="">Seleccione un paciente</option>
            {patients.map((patient) => (
              <option key={patient.UserID} value={patient.UserID}>
                {patient.Nombre} {patient.Apellido}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Médico:</label>
          <select value={doctorID} onChange={(e) => setDoctorID(e.target.value)} required>
            <option value="">Seleccione un médico</option>
            {doctors.map((doctor) => (
              <option key={doctor.DoctorID} value={doctor.DoctorID}>
                {doctor.Nombre} ({doctor.Especialidad})
              </option>
            ))}
          </select>
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
          <label>Fecha y Hora de la Cita:</label>
          <input
            type="datetime-local"
            value={date.toISOString().slice(0, 16)}
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
