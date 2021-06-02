import React, { createContext, useState } from "react";
// import { ProductReducer } from "./productReducer";
import iphone from "../assets/iphone.jpg";
import headphones from "../assets/headphones.jpg";
import microphone from "../assets/microphone.jpg";
import rings from "../assets/rings.jpg";
import shoes from "../assets/shoes.jpg";
import watch from "../assets/watch.jpg";
import perfum from "../assets/perfume.jpg";
import dslr from "../assets/dslr.jpg";
export const productContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: "DSLR Camera",
      price: 24999,
      image: dslr,
      productStatus: "hot",
    },
    {
      id: 2,
      name: "Perfume",
      price: 1499,
      image: perfum,
      productStatus: "new",
    },
    { id: 3, name: "Watch", price: 20999, image: watch, productStatus: "new" },
    { id: 4, name: "Shoes", price: 1299, image: shoes, productStatus: "new" },
    {
      id: 5,
      name: "Microphone",
      price: 1499,
      image: microphone,
      productStatus: "hot",
    },
    {
      id: 6,
      name: "Headphones",
      price: 3499,
      image: headphones,
      productStatus: "new",
    },
    {
      id: 7,
      name: "Iphone X",
      price: 72998,
      image: iphone,
      productStatus: "hot",
    },
    { id: 8, name: "Rings", price: 350, image: rings, productStatus: "new" },
  ]);

  return (
    <productContext.Provider value={{ products }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
