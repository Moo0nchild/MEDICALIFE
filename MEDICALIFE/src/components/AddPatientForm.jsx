import React, { useState } from 'react';

const AddPatientForm = ({ onClose, onAddPatient }) => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPatient({ cedula, nombre, apellido, fechaNacimiento, genero, direccion, telefono, email });
    onClose();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cédula:</label>
          <input 
            type="text" 
            value={cedula} 
            onChange={(e) => setCedula(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input 
            type="text" 
            value={apellido} 
            onChange={(e) => setApellido(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input 
            type="date" 
            value={fechaNacimiento} 
            onChange={(e) => setFechaNacimiento(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Género:</label>
          <select 
            value={genero} 
            onChange={(e) => setGenero(e.target.value)} 
            required 
          >
            <option value="">Seleccionar</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label>Dirección:</label>
          <input 
            type="text" 
            value={direccion} 
            onChange={(e) => setDireccion(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input 
            type="text" 
            value={telefono} 
            onChange={(e) => setTelefono(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Agregar Paciente</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
