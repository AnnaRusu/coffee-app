import FoodList from "./FoodList";
import Coffee1 from "../../assets/images/coffee2.png";
import Coffee2 from "../../assets/images/coffee3.png";
import Coffee3 from "../../assets/images/coffee4.png";
import Dessert1 from "../../assets/images/dessert1.png";
import Dessert2 from "../../assets/images/dessert2.png";
import Dessert3 from "../../assets/images/dessert3.png";

function Homepage() {
  const coffees = [
    {image: Coffee1, alt: "coffee1", title: "Coffee1", price: "$10", description: "try coffees from Kenya, Ethiopia", id: "1"},
    {image: Coffee2, alt: "coffee2", title: "Coffee2", price: "$10", description: "try coffees from Kenya, Ethiopia", id: "2"},
    {image: Coffee3, alt: "coffee3", title: "Coffee3", price: "$10", description: "try coffees from Kenya, Ethiopia", id: "3"}
  ]

  const desserts = [
    {image: Dessert1, alt: "dessert1", title: "Dessert1", price: "$15", description: "try desserts from Paris, France", id: "4"},
    {image: Dessert2, alt: "dessert2", title: "Dessert2", price: "$15", description: "try desserts from Paris, France", id: "5"},
    {image: Dessert3, alt: "dessert3", title: "Dessert3", price: "$15", description: "try desserts from Paris, France", id: "6"},
  ]

  return (
    <div>
      <FoodList food={coffees} imgSize="large-img"/>
      <FoodList food={desserts} imgSize="small-img"/>      
    </div>

  )
}

export default Homepage;