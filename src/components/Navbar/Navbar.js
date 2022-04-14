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
        <img src={logoBlack} className={styles.logoBlack} alt="" />
      </header>

      <nav className={navbar ? styles.fixed : styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.itemLeft}>
            {navbar ? (
              <img src={logoGray} className={styles.logoGray} alt="" />
            ) : null}
          </div>
          <div className={styles.center}>
            <div className={styles.itemRight}>
              <p>Monitor de Ações</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
