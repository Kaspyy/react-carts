import { generateCart } from '../helpers';

describe('generateCart', () => {
  it('should return a cart object', () => {
    const cart = generateCart();

    expect(cart).toEqual({
      userId: expect.any(Number),
      products: expect.any(Array),
    });
  });

  it('should return a cart object with products', () => {
    const cart = generateCart();

    expect(cart.products[0]).toEqual({
      id: expect.any(Number),
      quantity: expect.any(Number),
    });

    expect(cart.products[0].id).toBeGreaterThan(0);
    expect(cart.products[0].quantity).toBeGreaterThan(0);
  });
});
