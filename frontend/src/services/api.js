import axios from 'axios';

// Since we set up proxy in vite.config.js, we can use relative path
const API_URL = '/api';

export const checkHealth = async () => {
    try {
        const response = await axios.get(`${API_URL}/health`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAdvisory = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/crop-advisory`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
