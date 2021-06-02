import React, { useContext } from "react";
import { productContext } from "../Global/productContext";
import Banner from "./Banner";
import {cartContext} from "../Global/CartContext"
const Products = () => {
    const { products } = useContext(productContext);
     const {dispatch} = useContext(cartContext);
    
  return (
      <>
            <Banner />
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="pro">
              <div className="productImage">
                <img src={product.image} alt="Not found" />
              </div>
              <div className="productDetails">
                <div className="proName">
                  <h4>{product.name}</h4>
                </div>
                <div className="proPrice">&#x20B9; {product.price}.00</div>
              </div>
                    <div className="proButton" onClick={() => dispatch({ type: 'ADD_TO_CART', id:product.id, product })}>
                <button className="buyNow">add to cart</button>
              </div>
              {product.productStatus === "new" ? (
                <div className="new">New</div>
              ) : (
                ""
              )}
              {product.productStatus === "hot" ? (
                <div className="hot">Hot</div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
