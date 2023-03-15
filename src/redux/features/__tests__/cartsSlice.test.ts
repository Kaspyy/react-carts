import reducer from '../cartsSlice';

describe('cartsSlice', () => {
  describe('reducer', () => {
    it('should handle initial state', () => {
      expect(reducer(undefined, { type: 'unknown' })).toEqual({
        status: 'idle',
        data: {
          carts: [],
          total: 0,
        },
        error: '',
      });
    });

    it('should handle fetchCarts/pending', () => {
      const actual = reducer(
        {
          status: 'idle',
          data: {
            carts: [],
            total: 0,
          },
          error: '',
        },
        { type: 'carts/fetchCarts/pending' }
      );

      expect(actual).toEqual({
        status: 'pending',
        data: {
          carts: [],
          total: 0,
        },
        error: '',
      });
    });

    it('should handle fetchCarts/fulfilled', () => {
      const actual = reducer(
        {
          status: 'idle',
          data: {
            carts: [],
            total: 0,
          },
          error: '',
        },
        {
          type: 'carts/fetchCarts/fulfilled',
          payload: {
            carts: [
              {
                id: 1,
                name: 'cart 1',
                price: 100,
                quantity: 1,
              },
            ],
            total: 100,
          },
        }
      );

      expect(actual).toEqual({
        status: 'idle',
        data: {
          carts: [
            {
              id: 1,
              name: 'cart 1',
              price: 100,
              quantity: 1,
            },
          ],
          total: 100,
        },
        error: '',
      });
    });

    it('should handle fetchCarts/rejected', () => {
      const actual = reducer(
        {
          status: 'idle',
          data: {
            carts: [],
            total: 0,
          },
          error: '',
        },
        {
          type: 'carts/fetchCarts/rejected',
          payload: '',
        }
      );

      expect(actual).toEqual({
        status: 'failed',
        data: {
          carts: [],
          total: 0,
        },
        error: 'Failed to fetch carts',
      });
    });
  });
});
