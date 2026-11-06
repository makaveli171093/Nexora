import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
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
    },
  ),
);
