import { Logo } from '../ui/logo';
import { Info } from '../ui/info';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Info />
      </div>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.bottom}>
          <Logo />
          <p className={styles.copy}>© Designed by a Good Man. Maybee All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
