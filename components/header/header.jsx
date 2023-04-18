import Logo from '../ui/logo/logo';
import Navbar from './navbar/navbar';

import styles from './header.module.scss';
import MobileMenu from './mobile-menu/mobile-menu';

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
