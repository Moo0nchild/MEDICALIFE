import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div><Link to="/page1">AGREGAR PACIENTE</Link></div>
      <div><Link to="/page2">AGREGAR MÉDICOS</Link></div>
      <div><Link to="/calendar">GESTIONAR CITAS</Link></div>
      <div><Link to="/page4">OPCION MENU 4</Link></div>
      <div><Link to="/page5">OPCION MENU 5</Link></div>
    </div>
  );
}

export default Sidebar;
