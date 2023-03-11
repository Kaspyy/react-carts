import './App.scss';
import Dashboard from './modules/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import CartPage from './modules/CartPage/CartPage';
import NotFoundPage from './modules/NotFoundPage/NotFoundPage';
import { useAppDispatch } from './redux/hooks';
import { useEffect } from 'react';
import { fetchCarts } from './redux/features/cartsSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/cart/:cartId' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
