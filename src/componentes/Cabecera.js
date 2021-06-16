export const Cabecera = () => {
  return (
    <header className="container mt-5">
      <div className="row align-items-center">
        <div className="col col-sm-8">
          <h1>Lista de jugadores de fútbol:</h1>
        </div>
        <div className="col col-sm-4 d-flex justify-content-end">
          <button className="btn btn-success">Crear</button>
        </div>
      </div>
    </header>
  );
};
