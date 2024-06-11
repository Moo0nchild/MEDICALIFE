// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Outlet } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [usu, setUsu] = useState('');
  const [pass, setPass] = useState('');

  const inicioSesion = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { usuario: usu, password: pass });

      if (response.data.message === 'Inicio de sesión exitoso') {
        setLogin(true);
        document.getElementById('cont-fondo-sesion').style.display = 'none';
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div>
      <div id="cont-fondo-sesion">
        <div className="fondo-sesion">
          <div className="form-inicio-sesion">
            <div className="barra-inicio-sesion">
              <a href="/">Atras</a>
              <h3>INICIA SESIÓN</h3>
            </div>
            <div className="cont-form">
              <div className="usuario">
                <label htmlFor="usuario">USUARIO</label>
                <input type="text" name="usuario" id="usuario" onChange={(e) => setUsu(e.target.value)} required />
              </div>
              <div className="contraseña">
                <label htmlFor="password">CONTRASEÑA</label>
                <input type="password" name="password" id="password" onChange={(e) => setPass(e.target.value)} required />
              </div>
              <div className="btn-inicio-sesion">
                <input id="enviar" type="submit" value="INICIAR SESIÓN" onClick={inicioSesion} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
