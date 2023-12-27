import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const inuputAmountRef = useRef();

  const [isFormDataValid, setIsFormDataValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inuputAmountRef.current.value;
    const numberedEnteredAmount = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      numberedEnteredAmount < 0 ||
      numberedEnteredAmount > 5
    ) {
      setIsFormDataValid(false);
      return;
    }

    props.addToCart(numberedEnteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={inuputAmountRef}
        label="Amount"
        input={{
          id: "amount_",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button type="submit">+Add</button>
      {!isFormDataValid && <p>please! enete valid form data</p>}
    </form>
  );
};
export default MealItemForm;
