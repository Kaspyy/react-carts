import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  it('should render with primary variant and info palette by default', () => {
    const { getByRole } = render(<Button label='Click me' />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('primary');
    expect(button).toHaveClass('info');
    expect(button).not.toHaveAttribute('disabled');
    expect(button).toHaveTextContent('Click me');
  });

  it('should render with secondary variant and danger palette when props are passed', () => {
    const { getByRole } = render(
      <Button label='Click me' variant='secondary' palette='danger' />
    );
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('secondary');
    expect(button).toHaveClass('danger');
    expect(button).not.toHaveAttribute('disabled');
    expect(button).toHaveTextContent('Click me');
  });

  it('should render with disabled attribute when disabled prop is passed', () => {
    const { getByRole } = render(<Button label='Click me' disabled />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
  });

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button label='Click me' onClick={onClick} />);
    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
