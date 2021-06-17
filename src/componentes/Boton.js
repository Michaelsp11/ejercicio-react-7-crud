import PropTypes from "prop-types";
export const Boton = (props) => {
  const { texto, className, botonDesactivado, accion } = props;
  return (
    <button className={className} onClick={accion} disabled={botonDesactivado}>
      {texto}
    </button>
  );
};
Boton.propTypes = {
  texto: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  botonDesactivado: PropTypes.bool,
  accion: PropTypes.func.isRequired,
};
