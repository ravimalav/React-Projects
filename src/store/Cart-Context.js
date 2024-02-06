import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  cartLength: 0,
  getCartLength: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;
