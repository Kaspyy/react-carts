import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../redux/hooks';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const { data, status, error } = useAppSelector(state => state.carts);

  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.title}>
          <h2>Carts</h2>
        </div>
        <div className={styles.button_container}>
          <Link to='/add-cart'>
            <Button label='Add Cart' variant='secondary' />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        {error && <ErrorMessage />}
        {status === 'pending' && <Loader />}
        {data.carts.map(cart => (
          <Card
            key={cart.id}
            cartId={cart.id}
            items={cart.totalProducts}
            price={cart.total}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
