import React from "react";
import classes from "./Cart.module.css";

function Cart() {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "kofta", amount: 2, price: 5 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}

export default Cart;
