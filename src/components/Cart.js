import React from "react";
import { useCart } from "./CardContex";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleClear = () => {
    dispatch({ type: "clearCart" });
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.price} x {item.quantity}</li>
            </ul>
          ))}
          <p id="cart-total-amount">
            Total: ₹
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </p>
          <button id="clear-all-cart" onClick={handleClear}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
