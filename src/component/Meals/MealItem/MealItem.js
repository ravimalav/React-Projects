import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCntx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCntx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>
          <p className={classes.description}>{props.description}</p>
        </div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
