import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

interface Props {
  soloEstudiante?: boolean;
}

export function RutaProtegida({ soloEstudiante = false }: Props) {
  const token = useAuthStore((state) => state.token);
  const usuario = useAuthStore((state) => state.usuario);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (soloEstudiante && usuario?.rol !== "ESTUDIANTE") {
    return <Navigate to="/inicio" replace />;
  }

  return <Outlet />;
}
