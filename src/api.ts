import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const register = async (username: string, password: string) => {
    return axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username: string, password: string) => {
    const response = await axios.post<{ token: string }>(`${API_URL}/login`, { username, password });
    return response.data.token;
};

export const getProtectedData = async (token: string) => {
    return axios.get(`${API_URL}/protected`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
