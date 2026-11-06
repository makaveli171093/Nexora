import {useCallback,useEffect,useRef,useState} from 'react';
import {mensajeError} from '../lib/errores';
export function useApi<T>(pedir:()=>Promise<T>,dependencias:readonly unknown[]=[]){const ref=useRef(pedir);ref.current=pedir;const [data,setData]=useState<T|null>(null);const [cargando,setCargando]=useState(true);const [error,setError]=useState<string|null>(null);const [revision,setRevision]=useState(0);useEffect(()=>{let activo=true;setCargando(true);setError(null);ref.current().then(value=>{if(activo)setData(value);}).catch(e=>{if(activo)setError(mensajeError(e));}).finally(()=>{if(activo)setCargando(false);});return()=>{activo=false;}; // dependencies supplied by caller
// eslint-disable-next-line react-hooks/exhaustive-deps
},[revision,...dependencias]);const recargar=useCallback(()=>setRevision(x=>x+1),[]);return {data,cargando,error,recargar};}
