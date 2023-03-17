import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { closeChartModal } from '../../../redux/features/modalSlice';
import Chart from '../Chart';

const mockStore = configureStore([]);

describe('Chart', () => {
  let store = mockStore({});

  beforeEach(() => {
    store = mockStore({
      modal: {
        chartModalOpen: true,
      },
    });
  });

  const chartData = {
    id: 1,
    products: [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        quantity: 2,
        total: 20,
        discountPercentage: 20,
        discountedPrice: 8,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        quantity: 1,
        total: 20,
        discountPercentage: 0,
        discountedPrice: 20,
      },
      {
        id: 3,
        title: 'Product 3',
        price: 30,
        quantity: 3,
        total: 90,
        discountPercentage: 10,
        discountedPrice: 27,
      },
    ],
    total: 130,
    discountedTotal: 95,
    userId: 1,
    totalProducts: 3,
    totalQuantity: 6,
  };

  it('should render the chart modal', () => {
    render(
      <Provider store={store}>
        <Chart chartData={chartData} />
      </Provider>,
    );

    const modalTitle = screen.getByText('Price Chart');
    const modalCloseButton = screen.getByText('Close');
    const chartElement = screen.getByRole('img');

    expect(modalTitle).toBeInTheDocument();
    expect(modalCloseButton).toBeInTheDocument();
    expect(chartElement).toBeInTheDocument();
  });

  it('should close the modal when close button is clicked', () => {
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Chart chartData={chartData} />
      </Provider>,
    );

    const modalCloseButton = screen.getByText('Close');
    modalCloseButton.click();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(closeChartModal());
  });
});
