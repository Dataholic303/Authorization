import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Создаём экземпляр axios
const api = axios.create({
    baseURL: API_URL,
});

// Интерцептор — добавляет токен в каждый запрос
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Регистрация
export const register = async (email, password) => {
    const response = await api.post('/user/registration', { email, password });
    return response.data;
};

// Вход
export const login = async (email, password) => {
    const response = await api.post('/user/login', { email, password });
    return response.data;
};

// Проверка токена
export const checkAuth = async () => {
    const response = await api.get('/user/auth');
    return response.data;
};

export default api;