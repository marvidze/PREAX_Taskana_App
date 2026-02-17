import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={"body-md-regular " + styles.text}>
        Проект выполнен в рамках стажировки
        <a className={styles.link} href="http://www.preax.ru" target="_blank" rel="noopener noreferrer">
          PREAX
        </a>
      </p>
    </footer>
  );
};

export default Footer;
