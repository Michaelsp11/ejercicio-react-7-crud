import PropTypes from "prop-types";
import { Boton } from "./Boton";

export const Cabecera = (props) => {
  const { showFormulario, setShowFormulario } = props;
  const habilitarFormulario = () => {
    setShowFormulario(true);
  };
  return (
    <header className="container mt-5">
      <div className="row align-items-center">
        <div className="col col-sm-8">
          <h1>Jugadores</h1>
        </div>
        <div className="col col-sm-4 d-flex justify-content-end">
          {!showFormulario && (
            <Boton
              className="btn btn-success"
              texto="Crear"
              accion={habilitarFormulario}
            />
          )}
        </div>
      </div>
    </header>
  );
};
Cabecera.propTypes = {
  showFormulario: PropTypes.bool.isRequired,
  setShowFormulario: PropTypes.func.isRequired,
};
