import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShop } from "../../context/ShopContext";
import "./Cart.scss";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";

export default function Cart() {
  const { state } = useShop();
  const cartItems = state.cart;
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantityCart,
    0,
  );

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

        <a href="#" className="button">
          Checkout
        </a>
      </div>
    </div>
  );
}
