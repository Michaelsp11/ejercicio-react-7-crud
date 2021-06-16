import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Jugador } from "./componentes/Jugador";
import { Cabecera } from "./componentes/Cabecera";
import { Formulario } from "./componentes/Formulario";
import { jugadoresAPI } from "./datos/jugadores";
function App() {
  const [jugadores, setJugadores] = useState([...jugadoresAPI]);
  const [nuevoJugador, setNuevoJugador] = useState({
    id: null,
    nombre: "",
    apellidos: "",
    edad: 0,
    posicion: "",
    opinion: "",
  });
  const [showFormulario, setShowFormulario] = useState(false);
  const [accion, setAccion] = useState("");
  const [idJugador, setIdJugador] = useState(null);

  return (
    <>
      <Cabecera />
      <main className="container my-3">
        <div className="row">
          <div className="col-12">
            {!showFormulario && (
              <>
                <h2>Lista de jugadores:</h2>
                <ul className="list-group">
                  {jugadores.map((jugador) => (
                    <Jugador key={jugador.id} jugador={jugador} />
                  ))}
                </ul>
              </>
            )}
            {showFormulario && accion === "Crear" && (
              <>
                <h2>Crear jugador:</h2>
                <Formulario jugador={nuevoJugador} btnText={accion} />
              </>
            )}
            {/* {showFormulario &&
              accion === "editar" &&
              jugadores.filter((jugador) => {
                if (jugador.id === idJugador) {
                  return <Formulario jugador={jugador} />;
                }
              })} */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
