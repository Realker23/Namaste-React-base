import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const i = state.items.indexOf(action.payload);
      console.log(i);
      state.items.splice(i, 1);
    },
    clearItem: (state) => {
      //RTK says either you have to mutate the state or return a new state
      state.items.length = 0;
      // return {items:[]};
    },
  },
});

console.log(cartSlice);

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;
