// services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const handleRequestError = (error) => {
  if (error.response) {
    // El servidor ha respondido con un código de estado fuera del rango 2xx
    console.error('Error:', error.response.data);
    throw new Error('Error en la solicitud: ' + error.response.data.message);
  } else if (error.request) {
    // La solicitud fue realizada pero no se recibió respuesta
    console.error('No se recibió respuesta del servidor');
    throw new Error('No se recibió respuesta del servidor');
  } else {
    // Se produjo un error al configurar la solicitud
    console.error('Error al configurar la solicitud:', error.message);
    throw new Error('Error al configurar la solicitud: ' + error.message);
  }
};

export default {
  getUsers,
  addUser,
};
