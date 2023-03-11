import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './features/modalSlice';
import cartsSlice from './features/cartsSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    carts: cartsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
