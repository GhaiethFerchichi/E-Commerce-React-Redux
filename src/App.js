import React, { useEffect, useState } from "react";

import { Navbar, Products } from "./components/";
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
  console.log(productsData);
  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={productsData} onAddToCard={addToCartHandler} />
    </div>
  );
};

export default App;
