import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!isOpen || !image) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image.urls && (
        <img src={image.urls.regular} alt="" className={styles.image} />
      )}
      <div className={styles.info}>
        <p className={styles.author}>
          Photo by {image.user?.name || 'Unknown'}
        </p>
        <p className={styles.likes}>Likes: {image.likes || 0}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
