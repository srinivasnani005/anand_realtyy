import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance for general API requests
export const http = axios.create({
  baseURL: "http://localhost:3001", 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

// Request interceptor to add JWT token and decrypted id from cookies to headers
http.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  const encryptedId = Cookies.get("esrufoiprel");

  if (encryptedId) {
    config.headers.sub = encryptedId;  // Use 'sub' as key to match the backend
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle errors
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.message === "Network Error") {
      alert("Network Error");
    } else if (err.response.status === 401) {
      // If unauthorized, clear cookies and redirect to login
      Cookies.remove("access_token");
      Cookies.remove("esrufoiprel");
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
