import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    selectContacts: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { selectContacts } = filtersSlice.actions;
export default filtersSlice.reducer;
