import axios from "axios";

export function mensajeError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const datos = error.response?.data;

    if (typeof datos?.message === "string") {
      return datos.message;
    }

    if (Array.isArray(datos?.message)) {
      return datos.message.join(", ");
    }

    if (!error.response) {
      return "No se pudo conectar con el servidor. Intenta nuevamente.";
    }

    switch (error.response.status) {
      case 400:
        return "La solicitud contiene datos incorrectos.";
      case 401:
        return "Credenciales inválidas o sesión vencida.";
      case 403:
        return "No tienes permiso para realizar esta acción.";
      case 404:
        return "El recurso solicitado no existe.";
      case 409:
        return "La operación no pudo completarse por un conflicto.";
      case 500:
        return "Ocurrió un error en el servidor.";
      default:
        return "Ocurrió un error inesperado.";
    }
  }

  return "Ocurrió un error inesperado.";
}
