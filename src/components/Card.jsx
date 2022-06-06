import "./Card.scss";

function Card({ image, alt, title, price, description, className }) {
  const classes = "card " + className;

  return (
    <div className={classes}>
      <div className="image-container">
        <img src={image} alt={alt} />
      </div>
      <div className="card-heading">
        <h3>{title}</h3>
        <h3 className="price">{price}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Card;
