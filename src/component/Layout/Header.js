import Cart from "../Cart/CartIcon";
import classes from "./Header.module.css";

import { Fragment } from "react";

import mealImage from "../../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
