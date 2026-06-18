import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShop } from "../../context/ShopContext";
import "./Cart.scss";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { state } = useShop();
  const navigate = useNavigate();
  const cartItems = state.cart;
  const isDisabled = cartItems.length === 0;
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantityCart,
    0,
  );

  const handleNavigate = () => {
    navigate("/checkout");
  };

  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <div className="shopping-cart-total">
            <FontAwesomeIcon icon={faCartPlus} size="lg" />

            <div className="total-container">
              <span className="lighter-text">TOTAL: </span>
              <span className="main-color-text">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <ul className="shopping-cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((wine) => <CartItem key={wine.id} wine={wine} />)
          ) : (
            <p className="empty-cart-text">Your cart is empty</p>
          )}
        </ul>

        <button
          disabled={isDisabled}
          onClick={handleNavigate}
          className="button"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
