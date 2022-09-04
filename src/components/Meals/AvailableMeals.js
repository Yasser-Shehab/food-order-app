import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

import Card from "../UI/Card";
function AvailableMeals() {
  const [meals, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://react-http-c6eb2-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Somthing went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeal(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return <section className={classes.MealsLoading}>Loading...</section>;
  }

  if (error) {
    return <section className={classes.MealsError}>{error}</section>;
  }

  const mealsList = meals.map((meal) => <MealItem key={meal.id} {...meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
