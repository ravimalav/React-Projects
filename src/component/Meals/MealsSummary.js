import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h1>Delicios Food,Delivered To You</h1>
      <p>
        choose your favorite meal from our broad selection of available Meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our Meals are cooked with high-quality ingredients,just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
