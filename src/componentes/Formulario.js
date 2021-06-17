import { Boton } from "./Boton";
import { useFormulario } from "../hooks/useFormulario";
import { useCallback, useEffect } from "react";
export const Formulario = (props) => {
  const { jugador, guardarDatos, botonDesactivado, setBotonDesactivado } =
    props;
  const { datos, setDato } = useFormulario(jugador);
  const { id, nombre, apellidos, edad, posicion, opinion } = datos;
  const comprobarDatos = useCallback(() => {
    if (
      nombre !== "" &&
      apellidos !== "" &&
      edad !== "" &&
      posicion !== "" &&
      opinion !== ""
    ) {
      setBotonDesactivado(false);
    }
  }, [nombre, apellidos, edad, posicion, opinion, setBotonDesactivado]);
  useEffect(() => {
    comprobarDatos();
  }, [comprobarDatos]);
  return (
    <>
      <h2>{jugador.id === null ? "Crear " : "Editar "} jugador:</h2>
      <form noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => {
              setDato(e);
              comprobarDatos();
            }}
            className="form-control"
            id="nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            value={apellidos}
            onChange={(e) => {
              setDato(e);
              comprobarDatos();
            }}
            id="apellidos"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => {
              setDato(e);
              comprobarDatos();
            }}
            id="edad"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="posicion">Posicion:</label>
          <input
            type="text"
            value={posicion}
            onChange={(e) => {
              setDato(e);
              comprobarDatos();
            }}
            id="posicion"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="opinion">Opinion:</label>
          <input
            type="text"
            value={opinion}
            onChange={(e) => {
              setDato(e);
              comprobarDatos();
            }}
            id="opinion"
            className="form-control"
          />
        </div>
        <Boton
          texto={id !== null ? "Editar" : "Crear"}
          className="btn btn-primary"
          botonDesactivado={botonDesactivado}
          accion={(e) => {
            e.preventDefault();
            guardarDatos(datos);
          }}
        />
      </form>
    </>
  );
};
