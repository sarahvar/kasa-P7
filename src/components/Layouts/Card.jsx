const Card = ({ id, title, cover }) => {
  return (
    <figure key={id}>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </figure>
  );
};
export default Card;
