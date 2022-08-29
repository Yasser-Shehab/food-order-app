import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem({ id, name, price, description }) {
  const cartCtx = useContext(CartContext);
  const Fixedprice = `$${price.toFixed(2)}`;

  const addToCartHanlder = (amount) => {
    // console.log({
    //   id,
    //   name,
    //   amount,
    //   price,
    // });
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{Fixedprice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHanlder} />
      </div>
    </li>
  );
}

export default MealItem;
