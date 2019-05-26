import axios from 'axios';
const API_URL = 'https://4i2ufdga01.execute-api.us-east-1.amazonaws.com/api/';

const api = axios.create({
    baseURL: API_URL
});

export default api;
