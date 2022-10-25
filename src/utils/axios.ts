import axios from 'axios';
const BASE_URL = 'http://192.168.1.40:5007';
// const BASE_URL = 'http://localhost:5007';

export const fetchInstance = axios.create({
  baseURL: BASE_URL,
});
