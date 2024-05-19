import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://664928ff4032b1331bed6403.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "fetchAllContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
