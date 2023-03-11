import styles from './TableHeader.module.scss';

const TableHeader = () => {
  return (
    <div className={styles.table_header}>
      <div className={styles.table_header_item}>Product</div>
      <div className={styles.table_header_item}>Quantity</div>
      <div className={styles.table_header_item}>Price</div>
    </div>
  );
};

export default TableHeader;
