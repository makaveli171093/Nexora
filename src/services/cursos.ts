import { api } from '../lib/axios';
import { cursoDe,paginaDe,recursoDe } from '../lib/normalizar';
export const cursosService={getTodos:async()=>{const {data}=await api.get('/cursos',{params:{limit:100}});return paginaDe(data,cursoDe);},getPorId:async(id:number)=>{const {data}=await api.get(`/cursos/${id}`);return recursoDe(data,cursoDe);}};
