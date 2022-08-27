import classes from "./AvailableMeals.module.css";

import { DUMMY_MEALS } from "../../data/dummy-meals";
function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}

export default AvailableMeals;