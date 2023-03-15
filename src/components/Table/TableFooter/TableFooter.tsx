import { openChartModal } from '../../../redux/features/modalSlice';
import { useAppDispatch } from '../../../redux/hooks';
import Button from '../../Button/Button';
import styles from './TableFooter.module.scss';

export interface TableFooterProps {
  total: number | undefined;
}

const TableFooter = ({ total }: TableFooterProps) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openChartModal());
  };

  return (
    <div className={styles.table_footer}>
      <Button label='Price Chart' onClick={handleOpenModal} variant='primary' />
      <p className={styles.total}>${total}</p>
    </div>
  );
};

export default TableFooter;
