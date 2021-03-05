import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Cart, Navbar, Products } from "./components/";
import { commerce } from "./lib/commerce.js";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProductsData = async () => {
    const { data } = await commerce.products.list();
    setProductsData(data);
  };

  const fetchCartData = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCartHandler = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProductsData();
    fetchCartData();
  }, []);

  const updateCartQtyHandler = async (productID, quantity) => {
    const { cart } = await commerce.cart.update(productID, { quantity });
    setCart(cart);
  };
  const removeFromCartHandler = async (productID) => {
    const { cart } = await commerce.cart.remove(productID);
    setCart(cart);
  };
  const emptyCartHandler = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={productsData} onAddToCard={addToCartHandler} />
          </Route>
          <Route exact path="/Cart">
            <Cart
              cart={cart}
              updateCartQtyHandler={updateCartQtyHandler}
              removeFromCartHandler={removeFromCartHandler}
              emptyCartHandler={emptyCartHandler}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
