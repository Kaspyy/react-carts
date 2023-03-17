import {
  ModalState,
  modalSlice,
  openChartModal,
  closeChartModal,
  openRemoveCartModal,
  closeRemoveCartModal,
} from '../modalSlice';

describe('modalSlice', () => {
  let initialState: ModalState;

  beforeEach(() => {
    initialState = {
      chartModalOpen: false,
      removeCartModalOpenId: null,
    };
  });

  it('should handle openChartModal', () => {
    const newState = modalSlice.reducer(initialState, openChartModal());
    expect(newState.chartModalOpen).toBe(true);
  });

  it('should handle closeChartModal', () => {
    const newState = modalSlice.reducer(
      { ...initialState, chartModalOpen: true },
      closeChartModal(),
    );
    expect(newState.chartModalOpen).toBe(false);
  });

  it('should handle openRemoveCartModal', () => {
    const newState = modalSlice.reducer(initialState, openRemoveCartModal(1));
    expect(newState.removeCartModalOpenId).toBe(1);
  });

  it('should handle closeRemoveCartModal', () => {
    const newState = modalSlice.reducer(
      { ...initialState, removeCartModalOpenId: 1 },
      closeRemoveCartModal(),
    );
    expect(newState.removeCartModalOpenId).toBe(null);
  });
});
