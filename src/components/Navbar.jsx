import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {  cartContext  } from "../Global/CartContext";;

const Navbar = () => {
  const {  qty  } = useContext(cartContext);;
  return (
    <>
      <nav>
        <ul className="left">
          <li>
            <Link to="/">ecommdotcom</Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <Link to="/cart">
              <span className="shoppingCart">
                <i class="fas fa-cart-plus"></i>
              </span>
              <span className="shoppingCartTotal">{qty}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
