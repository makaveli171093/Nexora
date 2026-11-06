import { api } from '../lib/axios';
import type { Usuario } from '../store/useAuthStore';
export interface LoginDatos { username:string; password:string; }
export interface RegistroDatos extends LoginDatos { nombre:string; apellido:string; email:string; }
interface AuthRespuesta { success:boolean; message:string; data:{token:string;tipo:string;usuario:Usuario}; }
export const authService={login:async(datos:LoginDatos)=>{const {data}=await api.post<AuthRespuesta>('/auth/login',datos);return data.data;},registro:async(datos:RegistroDatos)=>{const {data}=await api.post<AuthRespuesta>('/auth/register',datos);return data.data;}};
