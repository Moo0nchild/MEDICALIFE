import axios from 'axios';

const API_URL = 'http://localhost:5000/api/doctors';

const getAllMedics = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching medics:', error);
    throw error;
  }
};

const addDoctor = async (doctor) => {
  try {
    const response = await axios.post(API_URL, doctor);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data);
      throw new Error('Error al agregar médico: ' + error.response.data.message);
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
  getAllMedics,
  addDoctor,
};
