export const Dato = (props) => {
  const { campo, valor } = props;
  return (
    <p>
      {campo}: {valor}
    </p>
  );
};
