import axios from 'axios';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_HOST}/api`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
    return config;
});

axiosClient.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401) {
        localStorage.removeItem(ACCESS_TOKEN);
    }
    return Promise.reject(error);
});

export default axiosClient;