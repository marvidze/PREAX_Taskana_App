import styles from "./navBar.module.css";
import Icon from "@src/components/icon/Icon";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <a className={styles.navBarItem} href="#">
            <Icon name="inbox" className={styles.icon} />
            <p className={`${styles.textArea} body-md-semibold`}>Входящие</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
