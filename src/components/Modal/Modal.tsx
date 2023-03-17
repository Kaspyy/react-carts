import ReactModal from 'react-modal';
import { useAppSelector } from '../../redux/hooks';
import Button from '../Button/Button';
import styles from './Modal.module.scss';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

export interface ModalProps {
  onClickCancel: () => void;
  onClickDelete: () => void;
}

const Modal = ({ onClickCancel, onClickDelete }: ModalProps) => {
  const removeCartModalOpenId = useAppSelector(state => state.modal.removeCartModalOpenId);

  return (
    <ReactModal
      isOpen={!!removeCartModalOpenId}
      onRequestClose={onClickCancel}
      contentLabel='Price Chart Modal'
      className={styles.modal}
      overlayClassName='overlay'>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h2>Are you sure?</h2>
        </div>
        <div className={styles.button_container}>
          <Button label='Cancel' variant='secondary' onClick={onClickCancel} />
          <Button label='Delete' variant='primary' palette='danger' onClick={onClickDelete} />
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
