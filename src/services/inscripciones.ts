import { api } from '../lib/axios';
import { paginaDe,inscripcionDe } from '../lib/normalizar';
export const inscripcionesService={getTodas:async()=>{const {data}=await api.get('/inscripciones',{params:{limit:100}});return paginaDe(data,inscripcionDe);},inscribirse:async(cursoId:number)=>{const {data}=await api.post('/inscripciones',{cursoId});return data;}};
