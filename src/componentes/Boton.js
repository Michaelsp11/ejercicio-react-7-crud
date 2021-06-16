export const Boton = (props) => {
  const { tipo, texto, className } = props;
  return (
    <button type={tipo} className={className}>
      {texto}
    </button>
  );
};
