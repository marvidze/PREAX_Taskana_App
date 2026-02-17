import { useContext } from "react";
import Icon from "@src/components/icon/Icon";
import styles from "./themeSwitcher.module.css";
import { ThemeContext } from "@src/contexts/themeContext/themeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") toggleTheme();
  };

  return (
    <div
      className={`${styles.switcher} ${theme === "dark" ? styles.dark : ""}`}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="switch"
      aria-checked={theme === "dark"}
    >
      <div className={styles.iconArea}>
        <Icon name="sun" className={theme === "light" ? styles.currentIcon : styles.disableIcon} />
      </div>
      <div className={styles.iconArea}>
        <Icon name="moon" className={theme === "dark" ? styles.currentIcon : styles.disableIcon} />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
