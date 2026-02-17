import Button from "@src/components/button/Button";
import Logo from "@src/components/logo/Logo";
import ThemeSwitcher from "@src/components/themeSwitcher/ThemeSwitcher";
import styles from "./header.module.css";
import { useContext } from "react";
import { TaskEditorContext } from "@src/contexts/taskEditorContext/taskEditorContext";

const Header = () => {
  const { typeIsOpen, openTaskEditorCreate } = useContext(TaskEditorContext);

  const handleClick = () => {
    openTaskEditorCreate();
  };
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.buttonAndSwitcherArea}>
          <Button iconName="plus" iconClassName={styles.iconPlus} text="Создать" onClick={handleClick} disabled={typeIsOpen === "create"} size="lg" />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
