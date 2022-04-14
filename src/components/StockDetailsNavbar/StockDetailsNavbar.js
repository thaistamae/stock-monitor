import styles from "./StockDetailsNavbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoGray from "../../assets/logo3.png";

export default function MonitorNavbar() {
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
        <h1 className={styles.details}>Detalhes da Ação</h1>
      </header>

      <nav className={navbar ? styles.fixed : styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.itemLeft}>
            <Link to="/">
              {<img src={logoGray} className={styles.logoGray} alt="" />}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
