import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import useFetchProducts from "../useFetchProducts";

const ShopContext = createContext({
  cartItems: [],
  productsData: [],
  addToCart: () => {},
});

function Root() {
  const [cartItems, setCartItems] = useState([]);
  const url = "https://my.api.mockaroo.com/coffee.json?key=df90ae90";
  const productsData = useFetchProducts(url);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <ShopContext.Provider value={{ cartItems, productsData, addToCart }}>
      <Header />
      <Outlet />
    </ShopContext.Provider>
  );
}

export { ShopContext, Root };
