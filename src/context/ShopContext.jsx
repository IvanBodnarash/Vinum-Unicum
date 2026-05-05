import { createContext, useContext, useReducer } from "react";

const initialState = {
  cart: [],
  favorites: [],
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                ...item,
                quantityCart: Math.min(
                  item.quantityCart + action.payload.quantityCart,
                  item.inStock
                ),
              }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantityCart: Math.min(
              action.payload.quantityCart,
              action.payload.inStock
            ),
          },
        ],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "ADD_TO_FAVORITES":
      const alreadyFavorite = state.favorites.some(
        (item) => item.id === action.payload.id
      );

      if (alreadyFavorite) {
        return state;
      }

      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
              ...item,
              quantityCart: Math.min(
                action.payload.quantityCart,
                item.inStock
              ),
            }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
