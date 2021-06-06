import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D
            &ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="product name"
        />
      </div>

      <Link to={`/product/${1111}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>
        <p className="cartitem__price">$599.99</p>
        <select className="cartitem__select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="100">100</option>
          <option value="1000">1000</option>
        </select>
        <button className="cartitem__deleteBtn">
          <i className="fas fa-trash"></i>
        </button>
    </div>
  );
};

export default CartItem;
