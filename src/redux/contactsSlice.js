// import contactList from "../list.json";
import { fetchContacts } from "./contactsOps";
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
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
  extraReducers: (bilder) => {
    bilder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
