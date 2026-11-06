import { api } from "../lib/axios";
import type { Usuario } from "../store/useAuthStore";

export interface LoginDatos {
  username: string;
  password: string;
}

export interface RegistroDatos {
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  email: string;
}

export interface AuthRespuesta {
  success: boolean;
  message: string;
  data: {
    token: string;
    tipo: "Bearer";
    usuario: Usuario;
  };
}

export const authService = {
  login: async (datos: LoginDatos): Promise<AuthRespuesta["data"]> => {
    const respuesta = await api.post<AuthRespuesta>("/auth/login", datos);

    return respuesta.data.data;
  },

  registro: async (datos: RegistroDatos): Promise<AuthRespuesta["data"]> => {
    const respuesta = await api.post<AuthRespuesta>("/auth/register", datos);

    return respuesta.data.data;
  },
};
