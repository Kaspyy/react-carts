import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Chart from '../../components/Chart/Chart';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Table from '../../components/Table/Table';
import { useAppSelector } from '../../redux/hooks';
import styles from './CartPage.module.scss';

const CartPage = () => {
  const { cartId } = useParams();
  const navigate = useNavigate();
  const chartModalOpen = useAppSelector(state => state.modal.chartModalOpen);
  const cartData = useAppSelector(state =>
    state.carts.data.carts.find(cart => cart.id.toString() === cartId),
  );

  if (!cartData) {
    return <ErrorMessage />;
  }

  if (!cartId) {
    navigate('/');
    return null;
  }

  return (
    <>
      <Chart chartData={cartData} />
      <div className={`${styles.container} ${chartModalOpen && styles.blur}`}>
        <div className={styles.header_container}>
          <div className={styles.title}>
            <h2>Cart {cartId}</h2>
          </div>
          <div className={styles.button_container}>
            <Link to='/'>
              <Button label='Go Back' variant='secondary' />
            </Link>
          </div>
        </div>

        <Table data={cartData} />
      </div>
    </>
  );
};

export default CartPage;
