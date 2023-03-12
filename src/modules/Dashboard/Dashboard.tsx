import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Dashboard.module.scss';
import Modal from 'react-modal';
import { closeRemoveCartModal } from '../../redux/features/modalSlice';
import { removeCart } from '../../redux/features/cartsSlice';

Modal.setAppElement('#root');

const Dashboard = () => {
  const { data, status, error } = useAppSelector(state => state.carts);
  const removeCartModalOpenId = useAppSelector(
    state => state.modal.removeCartModalOpenId
  );

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeRemoveCartModal());
  };

  const handleDeleteCart = () => {
    dispatch(removeCart(removeCartModalOpenId!));
    handleCloseModal();
  };

  return (
    <div
      className={`${styles.container} ${removeCartModalOpenId && styles.blur}`}
    >
      <Modal
        isOpen={!!removeCartModalOpenId}
        onRequestClose={handleCloseModal}
        contentLabel='Price Chart Modal'
        className={styles.modal}
        overlayClassName='overlay'
      >
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <h2>Are you sure?</h2>
          </div>
          <div className={styles.button_container}>
            <Button
              label='Close'
              variant='secondary'
              onClick={handleCloseModal}
            />
            <Button
              label='Delete'
              variant='primary'
              palette='danger'
              onClick={handleDeleteCart}
            />
          </div>
        </div>
      </Modal>
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
    </div>
  );
};

export default Dashboard;
