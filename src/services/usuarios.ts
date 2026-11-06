import { api } from '../lib/axios';
import { paginaDe } from '../lib/normalizar';
/** Total del administrador: lectura de meta.total del listado de usuarios.
 * Verificar en Swagger que GET /usuarios y los filtros estén autorizados. */
export const usuariosService={totalEstudiantes:async()=>{const {data}=await api.get('/usuarios',{params:{limit:100,rol:'ESTUDIANTE'}});const pagina=paginaDe(data,v=>v);return pagina.total;}};
