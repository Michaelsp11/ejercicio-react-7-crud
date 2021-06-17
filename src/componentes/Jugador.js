import PropTypes from "prop-types";
import { Boton } from "./Boton";
import { Dato } from "./Dato";

export const Jugador = (props) => {
  const { jugador, setJugador, setShowFormulario, eliminarJugador } = props;
  const { id, nombre, apellidos, edad, posicion, opinion } = jugador;
  const editarJugador = (e) => {
    e.preventDefault();
    setJugador(jugador);
    setShowFormulario(true);
  };
  return (
    <li className="list-group-item">
      <div>
        <Dato campo="Nombre" valor={nombre} />
        <Dato campo="Apellidos" valor={apellidos} />
        <Dato campo="Edad" valor={edad} />
        <Dato campo="Posicion" valor={posicion} />
        <Dato campo="Opinion" valor={opinion} />
      </div>
      <div>
        <Boton
          className="btn btn-warning"
          texto="Editar"
          accion={editarJugador}
        />
        <Boton
          className="btn btn-danger"
          texto="Borrar"
          accion={() => eliminarJugador(id)}
        />
      </div>
    </li>
  );
};
Jugador.propTypes = {
  jugador: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    posicion: PropTypes.string.isRequired,
    opinion: PropTypes.string.isRequired,
  }).isRequired,
  setJugador: PropTypes.func.isRequired,
  setShowFormulario: PropTypes.func.isRequired,
  eliminarJugador: PropTypes.func.isRequired,
};
