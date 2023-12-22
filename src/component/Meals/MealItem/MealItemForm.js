import { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [itemCount, setItemCount] = useState(1);
  const formHandler = () => {
    itemCount += 1;
    setItemCount(itemCount);
    console.log("itemm count is", itemCount);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button type="submit">+Add</button>
    </form>
  );
};
export default MealItemForm;
