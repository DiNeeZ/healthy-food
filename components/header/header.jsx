import { Logo } from '../ui/logo';
import { Navbar } from './navbar';
import { MobileMenu } from './mobile-menu';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
