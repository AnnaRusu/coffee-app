import "./GetStarted.scss";
import CoffeeLogo from "../../assets/images/coffee-cup-logo.png";

function GetStarted() {
  return (
    <div className="container">
      <img src={CoffeeLogo} alt="coffee-logo" />
      <p>COFFEE SHOP</p>
      <button>Get started</button>
    </div>
  );
}

export default GetStarted;
