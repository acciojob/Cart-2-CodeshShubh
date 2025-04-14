import React, { useContext, useReducer } from "react";
import { productContext } from "./App";
import { Link } from "react-router-dom";
import { useCart } from './CardContex';





const Main = () => {
  const product = useContext(productContext);
  const { cart, dispatch } = useCart();


  console.log(cart);

  return (
    <div id="main">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <h1>Logo</h1>
        <div style={{ position: "relative" }}>
          <Link to={'/cart'} style={{cursor:'pointer'}} >🛒</Link>
          <p
            style={{
              position: "absolute",
              top: "-10px",
              bottom: "0px",
              right: "25px",
            }}
            id="nav-cart-item-count"
          >
            {cart.reduce((acc ,item)=> acc+item.quantity,0)}
          </p>
        </div>
      </nav>

      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {product.map((items) => {
            return (
              <ul
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={items.id}
                id="cart-items-list"
              >
                <li id="cart-amount-`id`">{items.name}:-</li>
                <li id="cart-item-price-`id`">{items.price}</li>
                <button
                  onClick={() =>
                    dispatch({ type: "addProduct", payload: items })
                  }
                  id="increment-btn-`id`"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "removeProduct", payload: items })
                  }
                  id="decrement-btn-`id`"
                >
                  -
                </button>
              </ul>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Main;
