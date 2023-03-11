import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={styles.container}>
    <h1>404</h1>
    <Link to='/'>
      <Button label='Homepage' />
    </Link>
  </div>
);

export default NotFoundPage;
