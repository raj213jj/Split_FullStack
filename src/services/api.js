// src/services/api.js
import axios from 'axios';
const API_BASE_URL = "https://localhost:7014/api"; // Update if different


const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
      },
});

export default api;