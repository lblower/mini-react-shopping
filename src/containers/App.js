import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import { HeaderNav } from "./HeaderContainer";
import Main from "./Main";

const App = () => (
  <div className="container">
    <HeaderNav />
    <hr />
    <Main />
    {/* <ProductsContainer />
    <hr />
    <CartContainer /> */}
  </div>
);

export default App;
