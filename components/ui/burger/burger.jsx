import styles from './burger.module.scss';

const Burger = ({ isOpen, handleClick }) => {
  return (
    <button
      className={`${styles.burger} ${isOpen && styles.active}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      onClick={handleClick}>
      <span className={styles.line} />
    </button>
  );
};

export default Burger;
