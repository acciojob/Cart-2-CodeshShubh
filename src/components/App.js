import React, { createContext, useEffect, useState } from "react";
import Main from "./Main";
import Cart from "./Cart";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import { CartProvider } from "./CardContex";

export const productContext = createContext();

const App = () => {
  const [products, setproducts] = useState([]);

  const fetchProducts = () => {
    const response = fetch("../../public/product.json");

    response
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <CartProvider>
      <productContext.Provider value={products}>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Main />}/>
             <Route path="/cart" element={<Cart/>} />
           </Routes>
         </BrowserRouter>
      </productContext.Provider>
      </CartProvider>
    </div>
  );
};
export default App;
