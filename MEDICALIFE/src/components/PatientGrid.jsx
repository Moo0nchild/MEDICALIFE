import React, { useState } from 'react';

const PatientGrid = ({ patients, onUpdatePatient, onDeletePatient }) => {
  const [editingPatient, setEditingPatient] = useState(null);

  const handleEdit = (patient) => {
    setEditingPatient(patient);
  };

  const handleUpdate = (updatedPatient) => {
    onUpdatePatient(updatedPatient);
    setEditingPatient(null);
  };

  const handleDelete = (id) => {
    onDeletePatient(id);
  };

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
            <th>Acciones</th>
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
              <td>
                <button onClick={() => handleEdit(patient)}>Editar</button>
                <button onClick={() => handleDelete(patient.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingPatient && (
        <EditPatientForm
          patient={editingPatient}
          onUpdatePatient={handleUpdate}
          onClose={() => setEditingPatient(null)}
        />
      )}
    </div>
  );
};

const EditPatientForm = ({ patient, onUpdatePatient, onClose }) => {
  const [cedula, setCedula] = useState(patient.cedula);
  const [nombre, setNombre] = useState(patient.nombre);
  const [apellido, setApellido] = useState(patient.apellido);
  const [fechaNacimiento, setFechaNacimiento] = useState(patient.fechaNacimiento);
  const [genero, setGenero] = useState(patient.genero);
  const [direccion, setDireccion] = useState(patient.direccion);
  const [telefono, setTelefono] = useState(patient.telefono);
  const [email, setEmail] = useState(patient.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePatient({ ...patient, cedula, nombre, apellido, fechaNacimiento, genero, direccion, telefono, email });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cédula:</label>
          <input type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} required />
        </div>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
        </div>
        <div>
          <label>Género:</label>
          <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
            <option value="">Seleccionar</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Actualizar Paciente</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default PatientGrid;
