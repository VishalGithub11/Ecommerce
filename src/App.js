import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" ;
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Error from "./components/Error"
import "./App.css";
import ProductContextProvider from "./Global/productContext";
import CartContextProvider from "./Global/CartContext"

import Products from "./components/Products";

function App() {
  return (
    <>
      <ProductContextProvider>
      <CartContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
            <Route component={Error}/>
            </Switch>
          </Router>
          </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
