import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const cartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    qty: 0,
    totalPrice: 0,
    message: "",
  });

  return (
    <>
      <cartContext.Provider value={{ ...cart, dispatch }}>
        {props.children}
      </cartContext.Provider>
    </>
  );
};

export default CartContextProvider;
