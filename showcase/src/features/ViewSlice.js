import { createSlice } from "@reduxjs/toolkit";

export const ViewSlice = createSlice({
  name: "view",
  initialState: {
    rowID: null,
    isOpen: false,
    viewData: [],
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    hideModal: (state) => {
      state.isOpen = false;
    },
    setRowData: (state, action) => {
      state.viewData = action.payload;
    },
  },
});

export const { openModal, hideModal, setRowData } = ViewSlice.actions;
export default ViewSlice.reducer;
