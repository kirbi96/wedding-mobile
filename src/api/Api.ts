import axios, { AxiosError } from 'axios';
import { BASE_URL } from './consts'

import authAPI from './authAPI';
import organizationAPI from "./organizationAPI";
import userAPI from "./userAPI";
import newsAPI from "./newsAPI";

import Notification from '../utils/NotificationUtil';

export interface ApiResponse<T> {
    status: number;
    data: T;
    message: string;
}

axios.interceptors.request.use(
    async (config) => {
        if (__DEV__) {
            // console.log(
            //     `%c REQUEST %c ${config.url} `,
            //     'background: #03adfc; color: #0f1314; font-weight: 600',
            //     'background: #1f56a3',
            //     { url: config.url, data: config.data, headers: config.headers },
            //     // JSON.parse(config.headers.data || ''),
            // );
        }
        return {
            ...config,
            baseURL: BASE_URL,
            headers: { 'Content-Type': 'application/json', ...config.headers },
        };
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    async (response) => {
        // console.log(`%c RESPONSE %c ${response.config.url} `, 'background: #42f5a4; color: #0f1314; font-weight: 600', 'background: #2cb878; color: #0f1314;', response);
        return response;
    },
    async (error: AxiosError) => {
        if (__DEV__) {
            console.log('ResponseError', error.message);
            console.log('ResponseErrorData', error.response?.data?.message);
        }

        Notification.showError(error.response?.data?.message || 'Неизвестная ошибка');

        switch (error.response?.status) {
            case 401: {
                // console.log('Ошибка - 401');
                // stores.authStore.clearToken();

                throw error;
            }
            case 400: {
                // console.log('Ошибка - 400');
                throw error;
            }
            default: {
                // console.log('Ошибка на сервере');
                throw error;
            }
        }
    },
);

class APIService {
    auth = authAPI;
    organization = organizationAPI;
    user = userAPI;
    news = newsAPI;

    setToken = (token: string) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + token;
    };

    clearToken = () => {
        axios.defaults.headers['Authorization'] = null;
    };
}

const API = new APIService();
export default API;
