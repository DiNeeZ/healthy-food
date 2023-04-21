import Link from 'next/link';
import { IoArrowRedoSharp } from 'react-icons/io5';

import styles from './button-link.module.scss';

const ButtonLink = ({ href, style, className }) => {
  return (
    <Link href={href} className={`${styles.button} ${className}`} style={style}>
      <IoArrowRedoSharp size={20} />
    </Link>
  );
};

export default ButtonLink;
