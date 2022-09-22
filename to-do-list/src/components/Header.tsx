import styles from './Header.module.css'

import AppLogo from "../assets/logo.svg"

export function Header() {
  return(
    <header className={styles.header}>
      <img src={AppLogo} alt="Logotipo To-Do List" />
    </header>
  )
}