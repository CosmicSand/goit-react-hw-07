import contactList from "../list.json";
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactList,
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (newContact) => ({
        payload: {
          id: crypto.randomUUID(),
          ...newContact,
        },
      }),
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id.toString() !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
