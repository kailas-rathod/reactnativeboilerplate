import axios from 'axios';
import { HEADERS, BASE_URL } from '../config/constants';
import { gettoken } from '../config/session';

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: HEADERS,
  });

  instance.interceptors.request.use(
    async config => {
      const token = gettoken();
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      } else {
        delete config.headers.authorization;
      }
      return config;
    },
    error => Promise.reject(error)
  );

  return instance;
};

export const UATRepository = createAxiosInstance();
export const TokenRepository = createAxiosInstance();
