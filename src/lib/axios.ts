import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 90000,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const url = error.config?.url ?? "";

    const esRutaPublica =
      url.includes("/auth/login") ||
      url.includes("/auth/register") ||
      url.includes("/auth/registro");

    if (
      error.response?.status === 401 &&
      !esRutaPublica &&
      useAuthStore.getState().token
    ) {
      useAuthStore.getState().cerrarSesion();

      if (window.location.pathname !== "/login") {
        window.location.replace("/login");
      }
    }

    return Promise.reject(error);
  },
);
