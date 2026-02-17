import { useState } from "react";
import Icon from "@src/components/icon/Icon";
import styles from "./taskEditorButton.module.css";

const TaskEditorButton = ({ text, isLoading = false, variant, type, onClick, disabled = false, isOpen }) => {
  const [isPressed, setIsPressed] = useState(false);

  const variantClassName = styles[variant] || "";
  const isPressedClassName = variant == "dark" ? styles.darkPressed : styles.lightPressed;
  const isLoadingClassName = variant == "dark" ? styles.darkLoading : styles.lightLoading;
  const iconClassName = variant == "dark" ? styles.iconDarkLoading : styles.iconLightLoading;
  const tabIndexButton = isOpen ? "0" : "-1";

  return (
    <>
      {isLoading ? (
        <button type={type} className={isLoadingClassName}>
          <Icon name="loading" className={iconClassName} />
        </button>
      ) : (
        <button
          tabIndex={tabIndexButton}
          disabled={disabled}
          type={type}
          className={`${isPressed ? isPressedClassName : variantClassName}`}
          onKeyDown={(e) => {
            if (e.key === "Enter") setIsPressed(true);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") setIsPressed(false);
          }}
          onClick={onClick}
        >
          <div className={`${variant === "dark" ? "body-lg-semibold " + styles.textDark : "body-lg-semibold " + styles.textLight}`}>{text}</div>
        </button>
      )}
    </>
  );
};

export default TaskEditorButton;
