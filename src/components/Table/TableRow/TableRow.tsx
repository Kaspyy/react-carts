import styles from './TableRow.module.scss';

export interface TableRowProps {
  title: string;
  quantity: number;
  price: number;
  discountedPrice: number;
}

const TableRow = ({
  title,
  quantity,
  price,
  discountedPrice,
}: TableRowProps) => {
  return (
    <div className={styles.table_row}>
      <div className={styles.product_column}>{title}</div>
      <div>{quantity}</div>
      <div className={styles.price_column}>
        <span className={styles.original_price}>${price}</span>
        <span className={styles.discounted_price}>
          ${(discountedPrice / quantity).toFixed(0)}
        </span>
      </div>
    </div>
  );
};

export default TableRow;
