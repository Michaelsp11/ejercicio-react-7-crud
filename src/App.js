import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Jugador } from "./componentes/Jugador";
import { Cabecera } from "./componentes/Cabecera";
import { Formulario } from "./componentes/Formulario";
import { jugadoresAPI } from "./datos/jugadores";
function App() {
  const posiciones = ["Portero", "Defensa", "Mediocentro", "Delantero"];
  const [jugadores, setJugadores] = useState([...jugadoresAPI]);
  const [jugador, setJugador] = useState({
    id: null,
    nombre: "",
    apellidos: "",
    edad: 0,
    posicion: "",
    opinion: "",
  });
  const [showFormulario, setShowFormulario] = useState(false);
  const [botonDesactivado, setBotonDesactivado] = useState(true);
  const guardarJugador = (nuevoJugador) => {
    if (nuevoJugador.id !== null) {
      editarJugador(nuevoJugador);
    } else {
      crearJugador(nuevoJugador);
    }
    vaciarJugador();
  };
  const getLastId = () =>
    jugadores.reduce((acumulador, jugador) => {
      if (acumulador < jugador.id) {
        acumulador = jugador.id;
      }
      return acumulador;
    }, 0);
  const crearJugador = (jugador) => {
    const ultimoId = getLastId();
    setJugadores([...jugadores, { ...jugador, id: ultimoId + 1 }]);
  };
  const editarJugador = (nuevoJugador) => {
    setJugadores(
      jugadores.map((jugador) => {
        if (jugador.id === nuevoJugador.id) {
          return {
            ...jugador,
            nombre: nuevoJugador.nombre,
            apellidos: nuevoJugador.apellidos,
            edad: nuevoJugador.edad,
            posicion: nuevoJugador.posicion,
            opinion: nuevoJugador.opinion,
          };
        }
        return jugador;
      })
    );
  };
  const eliminarJugador = (id) => {
    setJugadores(jugadores.filter((jugador) => jugador.id !== id));
  };
  const vaciarJugador = () => {
    setJugador({
      id: null,
      nombre: "",
      apellidos: "",
      edad: 0,
      posicion: "",
      opinion: "",
    });
  };
  return (
    <>
      <Cabecera
        showFormulario={showFormulario}
        setShowFormulario={setShowFormulario}
      />
      <main className="container my-3">
        <div className="row">
          <div className="col-12">
            {!showFormulario && (
              <>
                <h2>Lista de jugadores:</h2>
                <ul className="list-group">
                  {jugadores.map((jugador) => (
                    <Jugador
                      key={jugador.id}
                      jugador={jugador}
                      setJugador={setJugador}
                      setShowFormulario={setShowFormulario}
                      eliminarJugador={eliminarJugador}
                    />
                  ))}
                </ul>
              </>
            )}
            {showFormulario && (
              <>
                <Formulario
                  jugador={jugador}
                  botonDesactivado={botonDesactivado}
                  posiciones={posiciones}
                  setBotonDesactivado={setBotonDesactivado}
                  setShowFormulario={setShowFormulario}
                  vaciarJugador={vaciarJugador}
                  guardarDatos={guardarJugador}
                />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
