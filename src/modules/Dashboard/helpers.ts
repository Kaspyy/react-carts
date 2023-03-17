import { AddCartPayload } from '../../types/carts';

export const generateCart = (): AddCartPayload => {
  const userId = Math.floor(Math.random() * 100);
  const products = Array.from({ length: Math.floor(Math.random() * 5 + 1) }, (_, i) => ({
    id: i + 1,
    quantity: Math.floor(Math.random() * 10 + 1),
  }));

  return {
    userId,
    products,
  };
};
