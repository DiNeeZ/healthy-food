import { useEffect, useState } from 'react';

import Burger from '@/components/ui/burger/burger';
import Link from 'next/link';

import { navLinks } from '@/data';
import styles from './mobile-menu.module.scss';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.toggle('dis-scroll');
    }

    return () => document.body.classList.remove('dis-scroll');
  }, [isOpen]);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.menu}>
      <Burger handleClick={handleClick} isOpen={isOpen} />

      <ul className={`${styles.list} ${isOpen && styles.open}`}>
        {navLinks.map((link) => (
          <Link href={link.href} key={`mobile-nav-${link.label}`} className={styles.link}>
            {link.label.charAt(0).toLocaleUpperCase() + link.label.slice(1)}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
