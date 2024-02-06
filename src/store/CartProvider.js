import { useContext, useReducer, useState } from "react";
import CartContext from "./Cart-Context";
import LoginContext from "./LoginContext";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalPrice = state.totalPrice + action.item.price;
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  if ((action.type = "REMOVE")) {
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const authCtx = useContext(LoginContext);
  const crudMail = authCtx.email
    ? authCtx.email.replace(/[^a-zA-Z ]/g, "")
    : "";

  const [totalCartItems, setTotalCartItems] = useState(0);

  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = async (item) => {
    const sendData = async () => {
      const response = await fetch(
        `https://crudcrud.com/api/80c48cee13bf4a3aac0d3c9b6edfe70b/cart${crudMail}`,
        {
          method: "post",
          body: JSON.stringify({
            item: item,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setTotalCartItems(totalCartItems + 1);

      dispatchCartState({ type: "ADD", item: item });
    };

    if (totalCartItems !== 0) {
      const response = await fetch(
        `https://crudcrud.com/api/80c48cee13bf4a3aac0d3c9b6edfe70b/cart${crudMail}`
      );
      const getData = await response.json();

      let findId;
      getData.forEach((element) => {
        if (element.item.id === item.id) {
          findId = true;
          return;
        }
      });

      if (!findId) {
        sendData();
      } else {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        const existedItem = getData.filter((element) => {
          return element.item.id === item.id;
        });

        const response = await fetch(
          `https://crudcrud.com/api/80c48cee13bf4a3aac0d3c9b6edfe70b/cart${crudMail}/${existedItem[0]._id}`,
          {
            method: "put",
            body: JSON.stringify({
              item: updatedItem,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        setTotalCartItems(totalCartItems + updatedItem.quantity);
      }
    } else {
      sendData();
    }
  };

  const removeItemHandler = (id) => {
    setTotalCartItems(totalCartItems - 1);
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const getCartLengthHandler = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/80c48cee13bf4a3aac0d3c9b6edfe70b/cart${crudMail}`
      );
      const data = await response.json();
      const cartItems = data.reduce((currNumber, item) => {
        return currNumber + item.item.quantity;
      }, 0);

      setTotalCartItems(cartItems);
    } catch (err) {
      console.log("error is", err);
    }
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    cartLength: totalCartItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    getCartLength: getCartLengthHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
