import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import contactList from "../list.json";

export const initialState = {
  contacts: {
    items: contactList,
  },
  filters: {
    name: "",
  },
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
