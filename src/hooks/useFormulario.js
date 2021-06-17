import { useState } from "react";

export const useFormulario = (datosJugador) => {
  const [datos, setDatos] = useState(datosJugador);
  const setDato = (e) => {
    setDatos({
      ...datos,
      [e.target.id]:
        e.target.type === "number" ? e.target.valueAsNumber : e.target.value,
    });
  };
  return {
    datos,
    setDato,
  };
};
