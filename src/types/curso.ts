/** Tipos de dominio. No se incluyen horario ni categoria: no forman parte del contrato indicado. */
export interface Docente { id?:number; nombre?:string; apellido?:string; username?:string; email?:string; }
export interface Curso { id:number; codigo:string; nombre:string; descripcion:string|null; creditos:number; docente:Docente|null; cupoMaximo:number|null; cuposDisponibles:number|null; }
export interface Inscripcion { id:number; estado:string; curso:{id:number;codigo:string;nombre:string;creditos:number}; }
export interface Pagina<T> { items:T[]; total:number; }
