import {Navigate,Outlet} from 'react-router-dom';
import {useAuthStore} from '../store/useAuthStore';
export function RutaProtegida({soloEstudiante=false}:{soloEstudiante?:boolean}){const token=useAuthStore(s=>s.token);const usuario=useAuthStore(s=>s.usuario);if(!token||!usuario)return <Navigate to="/login" replace/>;if(soloEstudiante&&usuario.rol!=='ESTUDIANTE')return <Navigate to="/inicio" replace/>;return <Outlet/>;}
export function RutaPublica(){const token=useAuthStore(s=>s.token);const usuario=useAuthStore(s=>s.usuario);return token&&usuario?<Navigate to="/inicio" replace/>:<Outlet/>;}
