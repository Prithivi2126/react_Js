
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      console.log('POST request intercepted', config);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received', response);
    return response;
  },
  (error) => {
    console.error('Error response', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
