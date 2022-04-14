import styles from "./Navbar.module.css";
import { useState } from "react";
import logoBlack from "../../assets/logo4.png";
import logoGray from "../../assets/logo3.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className={styles.title}>
        <h1 className={styles.monitor}>Monitor de Ações</h1>
      </header>

      <nav className={navbar ? styles.fixed : styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.itemLeft}>
            {<img src={logoGray} className={styles.logoGray} alt="" />}
          </div>
        </div>
      </nav>
    </>
  );
}
