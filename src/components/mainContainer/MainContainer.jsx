import styles from "./mainContainer.module.css";

const MainContainer = ({ children }) => {
  return <main className={styles.mainContainer}>{children}</main>;
};
export default MainContainer;
