import axios from 'axios';
const BASE_URL = 'http://localhost:5007';

export const fetchInstance = axios.create({
  baseURL: BASE_URL,
});
