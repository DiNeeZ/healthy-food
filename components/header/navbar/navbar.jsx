import Link from 'next/link';
import { navLinks } from '@/data';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <ul className={styles.list}>
        {navLinks.map((link) => (
          <Link href={link.href} key={`nav-${link.label}`} className={styles.link}>
            {link.label.charAt(0).toLocaleUpperCase() + link.label.slice(1)}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
