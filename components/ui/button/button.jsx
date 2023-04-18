import Link from 'next/link'
import styles from './button.module.scss'

const Button = ({ children, href }) => {
  return (
    <Link href={href} className={styles.button}>{children}</Link>
  )
}

export default Button