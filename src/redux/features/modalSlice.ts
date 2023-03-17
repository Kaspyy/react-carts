import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  chartModalOpen: boolean;
  removeCartModalOpenId: number | null;
}

const initialState: ModalState = {
  chartModalOpen: false,
  removeCartModalOpenId: 0,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openChartModal: state => {
      state.chartModalOpen = true;
    },
    closeChartModal: state => {
      state.chartModalOpen = false;
    },
    openRemoveCartModal: (state, action) => {
      state.removeCartModalOpenId = action.payload;
    },
    closeRemoveCartModal: state => {
      state.removeCartModalOpenId = null;
    },
  },
});

export const { openChartModal, closeChartModal, openRemoveCartModal, closeRemoveCartModal } =
  modalSlice.actions;

export default modalSlice.reducer;
