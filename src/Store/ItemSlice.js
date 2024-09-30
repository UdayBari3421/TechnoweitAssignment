import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  searchTerm: "",
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload; // Set items from API response
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setItems, setSearchTerm } = itemSlice.actions;

export const selectFilteredItems = (state) => {
  return state.items.items.filter((item) => item.title.toLowerCase().includes(state.items.searchTerm.toLowerCase()));
};

export default itemSlice.reducer;
