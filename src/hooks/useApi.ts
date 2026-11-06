import { useCallback, useEffect, useState } from "react";
import { mensajeError } from "../lib/errores";

export function useApi<T>(
  pedir: () => Promise<T>,
  dependencias: unknown[] = [],
) {
  const [data, setData] = useState<T | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    let cancelado = false;

    setCargando(true);
    setError(null);

    pedir()
      .then((resultado) => {
        if (!cancelado) setData(resultado);
      })
      .catch((err: unknown) => {
        if (!cancelado) setError(mensajeError(err));
      })
      .finally(() => {
        if (!cancelado) setCargando(false);
      });

    return () => {
      cancelado = true;
    };
    // La función pedir debe ser estable o depender
    // de las variables declaradas en dependencias.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intento, ...dependencias]);

  const recargar = useCallback(() => {
    setIntento((actual) => actual + 1);
  }, []);

  return { data, cargando, error, recargar };
}
