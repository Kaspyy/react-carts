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
      <div className={styles.product_column}>
        {title}
        <div>{quantity}</div>
      </div>
      <div className={styles.price_column}>
        <span className={styles.discounted_price}>${discountedPrice}</span>
        <span className={styles.original_price}>${price}</span>
      </div>
    </div>
  );
};

export default TableRow;
