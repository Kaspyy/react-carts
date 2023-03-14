import styles from './Card.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { openRemoveCartModal } from '../../redux/features/modalSlice';

export interface CardProps {
  cartId: number;
  items: number;
  price: number;
}

const Card = ({ cartId, items, price }: CardProps) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openRemoveCartModal(cartId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Cart {cartId}</h3>
        {cartId <= 20 && (
          <Button
            label='Delete'
            variant='secondary'
            palette='danger'
            onClick={handleOpenModal}
          />
        )}
      </div>
      <Link to={`/cart/${cartId}`}>
        <p className={styles.subheader}>Items: {items}</p>
        <span className={styles.image_container}>
          {Array.from({ length: items }, (_, i) => (
            <img
              key={i}
              className={styles.image}
              src='./icons8-product-50.png'
              alt='product'
            />
          ))}
        </span>
        <p className={styles.price}>Total: ${price}</p>
      </Link>
    </div>
  );
};

export default Card;
