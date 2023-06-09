import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AddCartPayload, Carts } from '../../types/carts';

export interface CartState {
  data: Pick<Carts, 'carts' | 'total'>;
  status: 'idle' | 'pending' | 'failed';
  error: string;
}

const initialState: CartState = {
  data: {
    carts: [],
    total: 0,
  },
  status: 'idle',
  error: '',
};

export const fetchCarts = createAsyncThunk<Carts>('carts/fetchCarts', async () => {
  const response = await fetch('https://dummyjson.com/carts');
  const data = await response.json();
  return data;
});

export const removeCart = createAsyncThunk('carts/removeCart', async (id: number) => {
  const response = await fetch(`https://dummyjson.com/carts/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
});

export const addCart = createAsyncThunk('carts/addCart', async (cart: AddCartPayload) => {
  const response = await fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });
  const data = await response.json();

  const random = Math.floor(Math.random() * 1000);
  data.id = data.id + random;

  return data;
});

export const cartsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCarts.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      state.status = 'idle';
      state.data = action.payload;
    });
    builder.addCase(fetchCarts.rejected, state => {
      state.status = 'failed';
      state.error = 'Failed to fetch carts';
    });
    builder.addCase(removeCart.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(removeCart.fulfilled, (state, action) => {
      state.status = 'idle';
      state.data.carts = state.data.carts.filter(cart => cart.id !== action.payload.id);
    });
    builder.addCase(removeCart.rejected, state => {
      state.status = 'failed';
      state.error = 'Failed to remove cart';
    });
    builder.addCase(addCart.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(addCart.fulfilled, (state, action) => {
      state.status = 'idle';
      state.data.carts.push(action.payload);
    });
    builder.addCase(addCart.rejected, state => {
      state.status = 'failed';
      state.error = 'Failed to add cart';
    });
  },
});

export default cartsSlice.reducer;
