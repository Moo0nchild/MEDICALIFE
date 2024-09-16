import axios from 'axios';

const API_URL = 'http://localhost:5000/api/patients';

const getAllPatients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

const addPatient = async (patient) => {
  try {
    const response = await axios.post(API_URL, patient);
    return response.data; // Devuelve los datos del paciente creado si la solicitud fue exitosa
  } catch (error) {
    
    if (error.response) {
      
      console.error('Error:', error.response.data);
      throw new Error('Error al agregar paciente: ' + error.response.data.message);
    } else if (error.request) {
      
      console.error('No se recibió respuesta del servidor');
      throw new Error('No se recibió respuesta del servidor');
    } else {
      
      console.error('Error al configurar la solicitud:', error.message);
      throw new Error('Error al configurar la solicitud: ' + error.message);
    }
  }
};

export default {
  getAllPatients,
  addPatient,
};
