import Icon from "@src/components/icon/Icon";
import styles from "./button.module.css";

const Button = ({ text, isLoading = false, iconName, iconClassName, size, onClick, disabled, className }) => {
  return (
    <>
      {isLoading ? (
        <button
          type="button"
          className={`${styles.buttonLoading} ${className} ${size === "lg" ? styles.buttonHeader : size === "sm" ? styles.buttonSm : size === "md" ? styles.buttonMd : ""}`}
        >
          <Icon name="loading" className={styles.iconLoading} />
        </button>
      ) : (
        <button
          onClick={onClick}
          type="button"
          className={`${className} ${size === "lg" ? styles.buttonHeader : size === "sm" ? styles.buttonSm : size === "md" ? styles.buttonMd : ""}`}
          disabled={disabled}
        >
          {iconName ? <Icon name={iconName} className={iconClassName} /> : ""}
          <div className={"body-md-semibold " + styles.text}>{text}</div>
        </button>
      )}
    </>
  );
};

export default Button;
