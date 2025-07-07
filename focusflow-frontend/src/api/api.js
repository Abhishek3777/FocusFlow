import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// Automatically attach token to every request if present
API.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
      console.log("➡️ Token in use:", token);
  } catch (err) {
    console.warn("⚠️ Error accessing localStorage:", err.message);
  }
  return config;
});

export const getWeeklySummary = () => API.get("/summary"); // named export
export default API;