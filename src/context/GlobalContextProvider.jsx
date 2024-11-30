import React, { useEffect, useState } from "react";
import { data } from "../assets/products-data";
import { MyContext } from "../hooks/custom";
import { getStorageItem, setStorageItem } from "../utils/utils";

const GlobalContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartProducts, setCartProducts] = useState(
    getStorageItem("cartProducts")
  );

  const featuredProducts = data.filter((product) => product.fields.featured);

  const addProductToCart = (product) => {
    const isExist = cartProducts.find((cp) => cp.id === product.id);

    if (isExist) {
      setCartProducts((prevCartProducts) => {
        return prevCartProducts.map((pCP) => {
          if (pCP.id === product.id) {
            return { ...pCP, count: pCP.count + 1 };
          }

          return { ...pCP };
        });
      });
    } else {
      setCartProducts((prevCartProducts) => {
        return [...prevCartProducts, { ...product, count: 1 }];
      });
    }
  };

  const removeProductFromCart = (product) => {
    setCartProducts(cartProducts.filter((cp) => cp.id !== product.id));
  };

  const increaseCartProductCount = (product) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((pCP) => {
        if (pCP.id === product.id) {
          return { ...pCP, count: pCP.count + 1 };
        }

        return { ...pCP };
      });
    });
  };
  const decreaseCartProductCount = (product) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((pCP) => {
        if (pCP.id === product.id) {
          return { ...pCP, count: pCP.count - 1 };
        }

        return { ...pCP };
      });
    });
  };

  useEffect(() => {
    setStorageItem("cartProducts", cartProducts);
  }, [cartProducts]);

  const value = {
    isLoading,
    setIsLoading,
    products: data,
    featuredProducts,
    addProductToCart,
    removeProductFromCart,
    increaseCartProductCount,
    decreaseCartProductCount,
    showCart,
    setShowCart,
    cartProducts,
    showCheckout,
    setShowCheckout,
    showNavBar,
    setShowNavBar,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default GlobalContextProvider;
