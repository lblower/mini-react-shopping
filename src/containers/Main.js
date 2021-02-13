import React from "react";
import { Switch, Route } from "react-router-dom";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";
import ProductsDetailContainer from "./ProductsDetailContainer";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ProductsContainer} />
      <Route exact path="/product" component={ProductsContainer} />
      <Route path="/product/:id" component={ProductsDetailContainer} />
      <Route path="/cart" component={CartContainer} />
    </Switch>
  </main>
);

export default Main;
