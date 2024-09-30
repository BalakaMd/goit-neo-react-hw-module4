import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
