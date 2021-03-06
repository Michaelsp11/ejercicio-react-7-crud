import PropTypes from "prop-types";
import { Boton } from "./Boton";
import { useFormulario } from "../hooks/useFormulario";
import { useCallback, useEffect } from "react";
export const Formulario = (props) => {
  const {
    jugador,
    botonDesactivado,
    posiciones,
    setBotonDesactivado,
    setShowFormulario,
    vaciarJugador,
    guardarDatos,
  } = props;
  const { datos, setDato } = useFormulario(jugador);
  const { id, nombre, apellidos, edad, posicion, opinion } = datos;
  const comprobarDatos = useCallback(() => {
    if (
      nombre !== "" &&
      apellidos !== "" &&
      edad !== 0 &&
      posicion !== "" &&
      opinion !== ""
    ) {
      setBotonDesactivado(false);
    } else {
      setBotonDesactivado(true);
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
          <select
            id="posicion"
            value={posicion}
            className="form-control"
            onChange={(e) => {
              setDato(e);
              comprobarDatos();
            }}
          >
            {posiciones.map((posicion) => (
              <option key={posicion} value={posicion}>
                {posicion}
              </option>
            ))}
          </select>
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
          texto={"Volver"}
          className="btn btn-primary"
          accion={(e) => {
            e.preventDefault();
            vaciarJugador();
            setShowFormulario(false);
          }}
        />
        <Boton
          texto={id !== null ? "Editar" : "Crear"}
          className="btn btn-primary"
          botonDesactivado={botonDesactivado}
          accion={(e) => {
            e.preventDefault();
            guardarDatos(datos);
            setShowFormulario(false);
          }}
        />
      </form>
    </>
  );
};
Formulario.propTypes = {
  jugador: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    posicion: PropTypes.string.isRequired,
    opinion: PropTypes.string.isRequired,
  }).isRequired,
  botonDesactivado: PropTypes.bool.isRequired,
  posiciones: PropTypes.array.isRequired,
  setBotonDesactivado: PropTypes.func.isRequired,
  setShowFormulario: PropTypes.func.isRequired,
  vaciarJugador: PropTypes.func.isRequired,
  guardarDatos: PropTypes.func.isRequired,
};
