import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    hideModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, hideModal } = ModalSlice.actions;
export default ModalSlice.reducer;
