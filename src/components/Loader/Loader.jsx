import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={styles.loader}>
      <Audio
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderComponent;
