import React from 'react';

const MedicGrid = ({ medics }) => {
  return (
    <div>
      <h2>Lista de Médicos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {medics.map((medic, index) => (
            <tr key={index}>
              <td>{medic.nombre}</td>
              <td>{medic.especialidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicGrid;
