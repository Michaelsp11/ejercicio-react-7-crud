import PropTypes from "prop-types";
export const Dato = (props) => {
  const { campo, valor } = props;
  return (
    <p>
      {campo}: {valor}
    </p>
  );
};
Dato.propTypes = {
  campo: PropTypes.string.isRequired,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
