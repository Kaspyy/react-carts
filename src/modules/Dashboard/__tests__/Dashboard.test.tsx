import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

describe('Dashboard', () => {
  it('should render the Dashboard component', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  });
});
