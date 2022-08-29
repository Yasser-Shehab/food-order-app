import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart({ onClose }) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "kofta", amount: 2, price: 10 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
