import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid19.mathdro.id',
});

api.interceptors.response.use(
  response => {
    console.log(`interceptors`);
    return response;
  },
  error => {
    // toast.error('Houve um erro inesperado. Verifique sua conexão');
    console.log(`interceptor, ${error}`);
    return Promise.reject(error);
  }
);

export default api;
