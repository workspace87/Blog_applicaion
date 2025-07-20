import axios from 'axios';

const apiInstance = axios.create({
  // Use your Vite environment variable — safely injected during build time
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/`,

  timeout: 50000, // timeout after 5 seconds

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default apiInstance;