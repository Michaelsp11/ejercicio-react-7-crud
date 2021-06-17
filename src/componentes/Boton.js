export const Boton = (props) => {
  const { texto, className, botonDesactivado, accion } = props;
  return (
    <button className={className} onClick={accion} disabled={botonDesactivado}>
      {texto}
    </button>
  );
};
