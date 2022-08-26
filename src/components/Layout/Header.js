import React from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="table of food" />
      </div>
    </>
  );
}

export default Header;
