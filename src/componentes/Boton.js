export const Boton = (props) => {
  const { texto, className } = props;
  return <button className={className}>{texto}</button>;
};
