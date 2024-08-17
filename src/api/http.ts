import axios from "axios";
import Cookies from "js-cookie";


export const http = axios.create({
  baseURL: "http://localhost:3001", 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});


http.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  const encryptedId = Cookies.get("esrufoiprel");

  if (encryptedId) {
    config.headers.sub = encryptedId;  
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


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
