import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Dashboard.module.scss';
import Modal from '../../components/Modal/Modal';
import { closeRemoveCartModal } from '../../redux/features/modalSlice';
import { addCart, removeCart } from '../../redux/features/cartsSlice';
import { generateCart } from './helpers';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector(state => state.carts);
  const removeCartModalOpenId = useAppSelector(
    state => state.modal.removeCartModalOpenId
  );

  const handleCloseModal = () => {
    dispatch(closeRemoveCartModal());
  };

  const handleDeleteCart = () => {
    if (removeCartModalOpenId) {
      dispatch(removeCart(removeCartModalOpenId));
    }
    handleCloseModal();
  };

  const handleAddCart = () => {
    dispatch(addCart(generateCart()));
  };

  return (
    <div
      className={`${styles.container} ${removeCartModalOpenId && styles.blur}`}
    >
      <Modal
        onClickCancel={handleCloseModal}
        onClickDelete={handleDeleteCart}
      />
      <div className={styles.header_container}>
        <div className={styles.title}>
          <h2>Carts</h2>
        </div>
        <div className={styles.button_container}>
          <Button
            label='Add Cart'
            variant='secondary'
            onClick={handleAddCart}
          />
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
            price={cart.discountedTotal}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
