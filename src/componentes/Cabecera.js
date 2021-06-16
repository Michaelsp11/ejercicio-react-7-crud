import { Boton } from "./Boton";

export const Cabecera = (props) => {
  return (
    <header className="container mt-5">
      <div className="row align-items-center">
        <div className="col col-sm-8">
          <h1>Lista de jugadores de fútbol:</h1>
        </div>
        <div className="col col-sm-4 d-flex justify-content-end">
          <Boton className="btn btn-success" texto="Crear" />
        </div>
      </div>
    </header>
  );
};
