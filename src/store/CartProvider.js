import { useReducer } from "react";
import cartContext from "./cart-context";

let initialState = {
  items: [],
  totalAmount: 0,
};

let reducer = (state, action) => {
  if (action.type === "AddItem") {
    let ind = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    if (ind > -1) {
      let totalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      let existingItem = state.items[ind];

      let updatedItem = {
        ...existingItem,
        amount: Number(existingItem.amount) + Number(action.item.amount),
      };

      console.log("updated item=", updatedItem);

      let existingItems = [...state.items];

      existingItems[ind] = updatedItem;

      return { items: existingItems, totalAmount: totalAmount };

      // let arr1 = [...state.items];

      // let total1 = Number(arr1[ind].amount) + Number(action.item.amount);
      // arr1[ind].amount = total1;

      // let tot1 = state.totalAmount + action.item.amount * action.item.price;

      // return { items: arr1, totalAmount: tot1 };
    } else {
      let arr = [...state.items, action.item];

      let totamt = state.totalAmount + action.item.amount * action.item.price;

      return { items: arr, totalAmount: totamt };
    }
  }
};

let CartProvider = (props) => {
  let [state, dispatchFunc] = useReducer(reducer, initialState);

  // console.log("state=", state);

  let AddItemHandler = (item) => {
    // console.log("In CartProvider: AddItemHandler: item", item);
    dispatchFunc({ type: "AddItem", item: item });
  };

  let deleteItemHandler = (id) => {
    dispatchFunc({ type: "DeleteItem", id: id });
  };

  let cartcontext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: AddItemHandler,
    deleteItem: deleteItemHandler,
  };

  return (
    <cartContext.Provider value={cartcontext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
