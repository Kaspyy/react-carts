import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Modal from 'react-modal';
import { closeChartModal } from '../../redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Button from '../Button/Button';
import styles from './Chart.module.scss';
import { options } from './config';
import { Cart } from '../../types/carts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface ChartProps {
  chartData: Cart;
}

const Chart = ({ chartData }: ChartProps) => {
  const { chartModalOpen } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  const labels = [
    ...new Set(chartData?.products.map((_, index) => `Product ${index + 1}`)),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Discounted Price',
        data: chartData?.products.map(product => product.discountedPrice),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Price',
        data: chartData?.products.map(product => product.total),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const handleCloseModal = () => {
    dispatch(closeChartModal());
  };

  return (
    <Modal
      isOpen={chartModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel='Price Chart Modal'
      className={styles.modal}
      overlayClassName='overlay'
    >
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h2>Price Chart</h2>
          <Button label='Close' onClick={handleCloseModal} />
        </div>
        <div className={styles.chart_container}>
          <Line options={options} data={data} className={styles.chart} />
        </div>
      </div>
    </Modal>
  );
};

export default Chart;
