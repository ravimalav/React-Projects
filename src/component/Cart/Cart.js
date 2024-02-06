import { useContext, useEffect, useState } from "react";
import CartToggler from "../../bootstrap-component/CartToggler";
import CartContext from "../../store/Cart-Context";
import LoginContext from "../../store/LoginContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(LoginContext);
  const [state, setState] = useState(false);
  const [cartItem, setCartItem] = useState();

  // const totalItemInCart = cartCtx.items.reduce((currNumber, item) => {
  //   return currNumber + item.quantity;
  // }, 0);
  const crudMail = authCtx.email.replace(/[^a-zA-Z]/g, "");

  const onClickHandler = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/80c48cee13bf4a3aac0d3c9b6edfe70b/cart${crudMail}`
      );
      const data = await response.json();

      setCartItem(data);
      setState(true);
    } catch (err) {
      console.log("error is", err);
    }
  };
  const onCloseHandler = () => {
    setState(false);
  };

  useEffect(() => {
    cartCtx.getCartLength();
  }, [cartCtx.cartLength]);

  return (
    <>
      <button
        style={{
          background: "none",
          border: "none",
          borderRadius: "none",
          fontWeight: "500",
          fontSize: "1.2rem",
        }}
        onClick={onClickHandler}
      >
        <span>cart</span> <span>{cartCtx.cartLength}</span>{" "}
      </button>
      {state && (
        <CartToggler
          onClose={onCloseHandler}
          data={cartItem}
          onChange={onClickHandler}
        />
      )}
    </>
  );
};

export default Cart;
