import React, { useContext } from "react";
import { cartContext } from "../Global/CartContext";
const Cart = () => {
  const { dispatch, shoppingCart, totalPrice, qty } = useContext(cartContext);

  return (
    <>
      <div className="cartContainer">
        <div className="cartDetails" style={{ marginTop: "100px" }}>
          {shoppingCart.length > 0
            ? shoppingCart.map((product) => (
                <div className="cart" key={product.id}>
                  <span className="cartProImage">
                    <img src={product.image} alt="" />
                    <span className="imageCount">{product.qty}</span>
                  </span>
                  <span className="cartProductName">{product.name}</span>
                  <span className="cartProductPrice">
                    &#x20B9;
                    {product.price}.00
                  </span>
                  <span className="inc">
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="productQuantity">{product.qty}</span>
                  <span className="dec">
                    <i className="fas fa-minus"></i>
                  </span>
                  <span className="productTotalPrice">
                    &#x20B9;{product.qty * product.price}
                  </span>
                  <button className="deleteCartPro">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))
            : "Your Cart is currently empty!"}
        </div>
        /
      </div>
    </>
  );
};

export default Cart;
