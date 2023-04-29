import axios from 'axios';

const api = axios.create({
    baseURL: "http://portifolio.local:80/api",
});

export default api;