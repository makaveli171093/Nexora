import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Rol = "ESTUDIANTE" | "ADMIN";

export interface Usuario {
  id: number;
  username: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: Rol;
  fotoUrl: string | null;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  token: string | null;
  usuario: Usuario | null;
  iniciarSesion: (token: string, usuario: Usuario) => void;
  cerrarSesion: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      usuario: null,

      iniciarSesion: (token, usuario) => set({ token, usuario }),

      cerrarSesion: () => set({ token: null, usuario: null }),
    }),
    {
      name: "nexora-sesion",
      version: 2,
    },
  ),
);
