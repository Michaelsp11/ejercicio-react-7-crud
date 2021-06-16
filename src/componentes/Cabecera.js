import { Boton } from "./Boton";

export const Cabecera = () => {
  return (
    <header className="container mt-5">
      <div className="row align-items-center">
        <div className="col col-sm-8">
          <h1>Jugadores</h1>
        </div>
        <div className="col col-sm-4 d-flex justify-content-end">
          <Boton className="btn btn-success" texto="Crear" />
        </div>
      </div>
    </header>
  );
};
