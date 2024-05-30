import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state from local storage", e);
    return [];
  }
};
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Could not save state to local storage", e);
  }
};
const initialState = loadStateFromLocalStorage();
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        message.warning("Item already in cart");
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
        message.success("Item added in cart");
      }
      saveStateToLocalStorage(state);
    },
    deleteToCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
        message.success("Item deleted from cart");
      }
      saveStateToLocalStorage(state);
    },
    increment: (state, action) => {
      console.log(state);
      console.log(action);
      const item = state.find((item) => item.id === action.payload);
      console.log(item);
      if (item) {
        item.price += item.price;
      }
      saveStateToLocalStorage(state);
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.price -= item.price;
      }
      saveStateToLocalStorage(state);
    },
  },
});

export const { addToCart, deleteToCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
