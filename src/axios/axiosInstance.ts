import axios from "axios";



export const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://blog-server-bae4.onrender.com/api' : 'http://localhost:3000/api',
    withCredentials: true
});