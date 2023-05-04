import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  shops: [],
  status: "idle",
  error: null,
};

export const fetchShops = createAsyncThunk("shops/fetchShops", async () => {
  const response = await fetch("http://localhost:3000/shops");
  const data = await response.json();
  return data;
});

export const ShopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shops = action.payload;
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ShopSlice.reducer;
