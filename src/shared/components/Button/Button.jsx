import styles from './button.module.scss';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
