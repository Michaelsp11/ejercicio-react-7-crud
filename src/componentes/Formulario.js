import { Boton } from "./Boton";
import { useFormulario } from "../hooks/useFormulario";
export const Formulario = (props) => {
  const { jugador, btnText } = props;
  const { nombre, apellidos, edad, posicion, opinion } = jugador;
  const { datos, setDato } = useFormulario(jugador);
  return (
    <>
      <form noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={setDato}
            className="form-control"
            id="nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            value={apellidos}
            onChange={setDato}
            id="apellidos"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={setDato}
            id="edad"
            className="form-control"
          />
          <span>Edad: </span>
        </div>
        <div className="form-group">
          <label htmlFor="posicion">Posicion:</label>
          <input
            type="text"
            value={posicion}
            onChange={setDato}
            id="posicion"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="opinion">Opinion:</label>
          <input
            type="text"
            value={opinion}
            onChange={opinion}
            id="opinion"
            className="form-control"
          />
        </div>
        <Boton tipo="submit" texto={btnText} className="btn btn-primary" />
      </form>
    </>
  );
};
