import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => {
  return (
    <div className={styles.errorMessage}>
      <h2>{error}</h2>
      <p>Please try again.</p>
    </div>
  );
};

export default ErrorMessage;
