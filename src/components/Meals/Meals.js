import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
let Meals = () => {
  return (
    <div className="pb-4">
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};

export default Meals;
