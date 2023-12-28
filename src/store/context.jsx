import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Context
const ShopContext = createContext();

// Creating a provider that will wrap the whole application
const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getDataFromApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Add products to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    toast.success("Item added to cart successfully");
  };

  // Remove products from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    toast.error("Item removed from cart");
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <ShopContext.Provider value={{ products, addToCart, cart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};

// Creating a custom hook
const useShop = () => {
  return useContext(ShopContext);
};

export { ShopContext, Provider, useShop };
