import styles from "./style.module.css";

import logo from "../../assets/ironhack-logo-xs.png"
import icon from "../../assets/menu-top-xs.png"

export function Navbar() {
     return (
          <header className={styles.header}>
               <div className={styles.container}>
                    <div className={styles.headerLogo}>
                         <img src={logo} alt="Ironhack logo" />
                    </div>
                    <div className={styles.headerMenu}>
                         <img src={icon} alt="logo Ironhack" />
                    </div>
               </div>

          </header>
     );
}