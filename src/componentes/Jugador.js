import { Boton } from "./Boton";
import { Dato } from "./Dato";

export const Jugador = (props) => {
  const { jugador, setJugador, setShowFormulario } = props;
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
        <Boton className="btn btn-danger" texto="Borrar" />
      </div>
    </li>
  );
};
