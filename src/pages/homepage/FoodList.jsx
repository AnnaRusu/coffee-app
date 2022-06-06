import "./FoodList.scss";
import Card from "../../components/Card";

function FoodList({ food, imgSize}) {
  return (
    <div className="food-list">
      {food.map((item) => (
        <Card
          className={imgSize}
          image={item.image}
          alt={item.alt}
          title={item.title}
          price={item.price}
          description={item.description}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default FoodList;
