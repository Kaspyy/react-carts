import { Cart } from '../../types/carts';
import TableHeader from './TableHeader/TableHeader';
import styles from './Table.module.scss';
import TableFooter from './TableFooter/TableFooter';
import TableRow from './TableRow/TableRow';

export interface TableProps {
  data: Cart | undefined;
}

const Table = ({ data }: TableProps) => {
  return (
    <div className={styles.table_container}>
      <TableHeader />
      <div className={styles.table_rows}>
        {data?.products.map(product => (
          <TableRow
            key={product.id}
            title={product.title}
            quantity={product.quantity}
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
      <TableFooter total={data?.discountedTotal} />
    </div>
  );
};

export default Table;
