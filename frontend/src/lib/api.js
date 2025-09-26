// frontend/src/lib/api.js
import axios from "axios";

// Base Axios instance
const api = axios.create({
  baseURL: "http://localhost:8000/api/", // Django backend
  withCredentials: true, // allow cookies if you ever switch to cookie auth
});

// ✅ Automatically attach JWT token if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access"); // store token after login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
