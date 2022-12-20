import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    modal: {
      isOpen: false,
      modalType: "",
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.modalType = action.payload;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.modalType = "";
    },
  },
});

export const { openModal, closeModal } = appSlice.actions;

export default appSlice.reducer;
