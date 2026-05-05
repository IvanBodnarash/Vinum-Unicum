import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CounterInput from "../wineCard/CounterInput";
import { useShop } from "../../context/ShopContext";

export default function CartItem({ wine }) {
  const { dispatch } = useShop();

  const handleQuantityChange = (newValue) => {
    dispatch({
      type: "UPDATE_CART_QUANTITY",
      payload: {
        id: wine.id,
        quantityCart: newValue,
      },
    });
  };

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: wine.id,
    });
  };

  return (
    <li className="item">
      <div className="item-img-text">
        <div className="item-img">
          <img src={wine.imageUrl} alt={wine.name} />
        </div>

        <div className="item-text">
          <span className="item-name">{wine.name}</span>
          <span className="item-price">$ {wine.price}</span>
          <div className="item-quantity">
            Quantity:
            <CounterInput
              min={1}
              max={wine.inStock}
              value={wine.quantityCart}
              onChange={handleQuantityChange}
              variant="compact"
            />
          </div>
        </div>
      </div>

      <button className="remove-button" type="button" onClick={handleRemove}>
        <FontAwesomeIcon icon={faXmark} size="sm" />
      </button>
    </li>
  );
}
