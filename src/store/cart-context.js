import React from "react";

let cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
});

export default cartContext;
