import { useContext, useState } from "react";
import CartToggler from "../../bootstrap-component/CartToggler";
import CartContext from "../../store/Cart-Context";

const Cart = () => {
  const cartCntx = useContext(CartContext);
  const [state, setState] = useState(false);
  const onClickHandler = () => {
    setState(true);
  };

  const onCloseHandler = () => {
    setState(false);
  };

  const totalQunatity = cartCntx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);

  return (
    <>
      <button
        style={{
          background: "none",
          border: "1px solid white",
          borderRadius: "round 2px",
        }}
        onClick={onClickHandler}
      >
        <span>cart</span> <span>{totalQunatity}</span>{" "}
      </button>
      {state && <CartToggler onClose={onCloseHandler} />}
    </>
  );
};

export default Cart;
