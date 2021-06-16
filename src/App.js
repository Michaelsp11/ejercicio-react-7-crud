import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Jugador } from "./componentes/Jugador";
import { Cabecera } from "./componentes/Cabecera";
import { jugadoresAPI } from "./datos/jugadores";
function App() {
  const [jugadores, setJugadores] = useState([...jugadoresAPI]);
  return (
    <>
      <Cabecera />
      <main className="container my-3">
        <div className="row">
          <div className="col-12">
            <ul class="list-group">
              {jugadores.map((jugador) => (
                <Jugador jugador={jugador} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
