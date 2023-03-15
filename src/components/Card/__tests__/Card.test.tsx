import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Card from '../Card';

const mockStore = configureStore([]);

describe('Card component', () => {
  const cartId = 1;
  const items = 5;
  const price = 100;

  it('should render cart details', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card cartId={cartId} items={items} price={price} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(`Cart ${cartId}`)).toBeInTheDocument();
    expect(screen.getByText(`Items: ${items}`)).toBeInTheDocument();
    expect(screen.getAllByAltText('product')).toHaveLength(items);
    expect(screen.getByText(`Total: $${price}`)).toBeInTheDocument();
  });

  it('should render delete button for cart IDs less than or equal to 20', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card cartId={cartId} items={items} price={price} />
        </BrowserRouter>
      </Provider>
    );

    if (cartId <= 20) {
      expect(screen.getByText('Delete')).toBeInTheDocument();
    } else {
      expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    }
  });

  it('should dispatch openRemoveCartModal action when delete button is clicked', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card cartId={cartId} items={items} price={price} />
        </BrowserRouter>
      </Provider>
    );

    if (cartId <= 20) {
      const deleteButton = screen.getByText('Delete');
      fireEvent.click(deleteButton);

      expect(store.getActions()).toEqual([
        {
          type: 'modal/openRemoveCartModal',
          payload: cartId,
        },
      ]);
    }
  });
});
