import { Parallax } from "react-scroll-parallax";
import { useShop } from "../../context/ShopContext";
import { NavLink } from "react-router-dom";

import "./Checkout.scss";
import CartItem from "../../components/ShoppingCart/CartItem";
import CheckoutForm from "../../components/Checkout/CheckoutForm";

export default function Checkout() {
  const { state } = useShop();
  const cartItems = state.cart;

  return (
    <main className="checkout-wrapper">
      <Parallax className="background" speed={-3} scale={[1, 1.03]}>
        <div className="background-overlay"></div>
      </Parallax>

      <div className="checkout-main">
        <header className="header">
          <div className="breadcrumb">
            <span>
              <NavLink to="/">Home</NavLink>
            </span>
            <span>/</span>
            <span>Checkout</span>
          </div>
        </header>

        <div className="content">
          <section className="checkout-items">
            {cartItems.map((wine) => (
              <CartItem key={wine.id} wine={wine} />
            ))}
          </section>

          <CheckoutForm />
        </div>
      </div>
    </main>
  );
}
