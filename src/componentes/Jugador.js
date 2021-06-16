export const Jugador = (props) => {
  const {
    jugador: { id, nombre, apellidos, edad, posicion, opinion },
  } = props;
  return (
    <li class="list-group-item">
      <div>
        <p>Nombre: {nombre}</p>
        <p>Apellidos: {apellidos}</p>
        <p>Edad: {edad}</p>
        <p>Posicion: {posicion}</p>
        <p>Opinion: {opinion}</p>
      </div>
      <div>
        <button className="btn btn-warning">Editar</button>
        <button className="btn btn-danger">Eliminar</button>
      </div>
    </li>
  );
};
