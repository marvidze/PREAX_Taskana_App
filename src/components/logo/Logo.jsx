import Illustration from "@src/components/illustration/Illustration";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <a href="#" className={styles.logoImage}>
      <Illustration name="logo" />
    </a>
  );
};

export default Logo;
