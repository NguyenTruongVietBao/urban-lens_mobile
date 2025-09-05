import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import envConfig from "./envConfig";

const env = process.env.NODE_ENV;
let API_URL = envConfig.API_URL;
let TOKEN_KEY = envConfig.TOKEN_KEY;
let ANDROID_DEV_API_URL = envConfig.API_URL_ANDROID_DEV;

if (env === "development" && Platform.OS === "android") {
  API_URL = ANDROID_DEV_API_URL;
}

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// // Response interceptor để handle errors
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       useAuthStore.getState().logout();
//     }
//     return Promise.reject(error);
//   }
// );

// Response interceptor
apiClient.interceptors.response.use(
  async (response) => {
    const { code, status, message, data } = response.data;

    if ((code === 200 || code === 201) && status === true) {
      if (data?.access_token) {
        await SecureStore.setItemAsync(TOKEN_KEY, data.access_token);
      }
      return response.data;
    }

    // unauthorized
    if (code === 401) {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      return Promise.reject({
        message: message || "Unauthorized",
        statusCode: 401,
        data,
      });
    }

    // other non-success codes
    return Promise.reject({
      message: message || "Đã xảy ra lỗi",
      statusCode: code,
      data,
    });
  },
  async (error) => {
    // Network or no response
    if (!error.response) {
      return Promise.reject({
        message: "Không thể kết nối đến máy chủ.",
        statusCode: 500,
      });
    }

    // In case backend sends non-200 HTTP, fallback to old logic
    const { data, status } = error.response;

    if (status === 401) {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
    }

    return Promise.reject({
      message: data?.message || "Đã xảy ra lỗi",
      statusCode: status,
      data,
    });
  }
);

export default apiClient;
