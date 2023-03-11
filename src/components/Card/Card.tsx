import styles from './Card.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export interface CardProps {
  cartId: number;
  items: number;
  price: number;
}

const Card = ({ cartId, items, price }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Cart {cartId}</h3>
        <Button label='Delete' variant='secondary' palette='danger' />
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
