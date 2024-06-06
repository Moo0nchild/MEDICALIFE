import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Page1 from './pages/AGREGAR PACIENTE';
import Page2 from './pages/AGREGAR MEDICO';
import CalendarPage from './pages/CalendarPage';

import './index.css'; // Asegúrate de importar los estilos

const App = () => {
  return (

    
    <Router>
      <Header />
      <div className="app">
        
        <Sidebar />
              
        <div className="main-content">
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/calendar" element={<CalendarPage />} />
   
            <Route path="/" element={<Page1 />} /> {/* Ruta por defecto */}
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
