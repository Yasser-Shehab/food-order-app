import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

import { DUMMY_MEALS } from "../../data/dummy-meals";
import Card from "../UI/Card";
function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} {...meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
