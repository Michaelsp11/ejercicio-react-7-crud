import { useState } from "react";

export const useFormulario = (datosJugador) => {
  const [datos, setDatos] = useState(datosJugador);
  const setDato = (e) => {
    setDatos({
      ...datos,
      [e.target.id]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    datos,
    setDato,
  };
};
