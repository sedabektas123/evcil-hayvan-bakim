import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Buraya API'nin temel URL'sini yazın
  timeout: 5000,
});

export const fetchHealthTips = async () => {
  try {
    const response = await api.get('/health-tips');
    return response.data;
  } catch (error) {
    console.error('API hata:', error);
    throw error;
  }
};
