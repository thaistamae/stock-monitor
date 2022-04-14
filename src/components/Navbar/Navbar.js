import styles from "./Navbar.module.css";
import logo from "../../assets/logo2.png"
import {useState, useEffect} from 'react';

export default function Navbar(){
    const [navbar, setNavbar] = useState(false);

    const changeBackground=() =>{
        if(window.scrollY >= 70){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
        <header className={styles.title}>
            <img src={logo} className={styles.logo} alt=""/>
        </header>
        
        <nav className={navbar ? styles.fixed : styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.itemLeft}>
              <p>item</p>
          </div>
          <div className={styles.itemRight}>
              <p>item</p>
          </div>
          </div>
          

        </nav>
      </>
      )
}
