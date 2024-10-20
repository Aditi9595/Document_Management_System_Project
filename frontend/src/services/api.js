import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });


API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const register = (userData) => API.post('/auth/register', userData);
export const login = (userData) => API.post('/auth/login', userData);
export const getDocuments = () => API.get('/documents');
export const createDocument = (data) => API.post('/documents', data);
