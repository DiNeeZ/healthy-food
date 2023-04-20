import Link from 'next/link';
import styles from './button.module.scss';

const Button = ({ children, href, xl }) => {
  return (
    <Link href={href} className={`${styles.button} ${xl && styles.xl}`}>
      {children}
    </Link>
  );
};

export default Button;
