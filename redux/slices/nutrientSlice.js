import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../html/api";

const initialState = {
  nutrients: [],
};

export const fetchNutrients = createAsyncThunk(
  "nutrients/fetchNutrients",
  async (item) => {
    const response = await api.get(`?query=${item}`);
    console.log(response.data.items);
    return response.data.items;
  }
);

const nutrientSlice = createSlice({
  name: "nutrients",
  initialState,
  reducers: {
    removeNutrients: (state, { payload }) => {
      state.nutrients = [];
    },
  },
  extraReducers: {
    [fetchNutrients.pending]: () => {
      console.log("Pending");
    },
    [fetchNutrients.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, nutrients: payload };
    },
    [fetchNutrients.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export default nutrientSlice.reducer;
export const getNutrientsData = (state) => state.nutrients.nutrients;
export const { removeNutrients } = nutrientSlice.actions;
