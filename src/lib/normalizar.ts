import type { Curso,Inscripcion,Pagina,Docente } from '../types/curso';
type Json=Record<string,unknown>;
const obj=(v:unknown):Json=>v&&typeof v==='object'&&!Array.isArray(v)?v as Json:{};
const str=(v:unknown):string=>v===null||v===undefined?'':String(v);
const num=(v:unknown):number=>typeof v==='number'?v:Number(v);
const maybeNum=(v:unknown):number|null=>v===undefined||v===null||v===''||!Number.isFinite(num(v))?null:num(v);
/** La API paginada puede envolver la colección en data; se preserva meta.total. */
export function paginaDe<T>(payload:unknown,map:(item:unknown)=>T):Pagina<T>{const root=obj(payload),inner=root.data??payload,box=obj(inner);const raw=Array.isArray(inner)?inner:Array.isArray(box.data)?box.data:Array.isArray(box.items)?box.items:Array.isArray(box.cursos)?box.cursos:Array.isArray(box.inscripciones)?box.inscripciones:[];const meta=obj(root.meta??box.meta);const total=maybeNum(meta.total??box.total??root.total)??raw.length;return {items:raw.map(map),total};}
export function cursoDe(v:unknown):Curso{const x=obj(v),doc=x.docente===null?null:obj(x.docente);const docente:Docente|null=doc&&Object.keys(doc).length?{id:maybeNum(doc.id)??undefined,nombre:str(doc.nombre),apellido:str(doc.apellido),username:str(doc.username),email:str(doc.email)}:null;const cupoMaximo=maybeNum(x.cupoMaximo??x.cuposTotales??x.capacidad??x.cupos??x.cupo);
const disponibles=maybeNum(x.cuposDisponibles??x.cuposLibres??x.disponibles??x.cuposRestantes);
const ocupados=maybeNum(x.inscritos??x.cuposOcupados);
return {id:num(x.id),codigo:str(x.codigo),nombre:str(x.nombre),descripcion:x.descripcion==null?null:str(x.descripcion),creditos:num(x.creditos)||0,docente,cupoMaximo,cuposDisponibles:disponibles??(cupoMaximo!==null&&ocupados!==null?Math.max(0,cupoMaximo-ocupados):null)};}
export function inscripcionDe(v:unknown):Inscripcion {const x=obj(v),curso=obj(x.curso);return {id:num(x.id),estado:str(x.estado??x.status),curso:{id:num(curso.id),codigo:str(curso.codigo),nombre:str(curso.nombre),creditos:num(curso.creditos)||0}};}
export function recursoDe<T>(payload:unknown,map:(item:unknown)=>T):T{const root=obj(payload);return map(root.data??payload);}
