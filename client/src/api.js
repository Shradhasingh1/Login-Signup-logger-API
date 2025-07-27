import axios from 'axios';

const API = axios.create({
  baseURL: "https://login-signupbackend.onrender.com",
});

export default API;
