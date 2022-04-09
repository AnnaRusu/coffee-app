import "./Card.scss";

function Card({ image, alt, title, price, description }) {
  return (
    <div className="card">
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
