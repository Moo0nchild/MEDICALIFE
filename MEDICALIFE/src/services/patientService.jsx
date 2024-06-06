import axios from 'axios';

const API_URL = 'http://localhost:5000/patients'; // Cambia esta URL a la de tu backend

const getPatients = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

export default {
  getPatients
};
