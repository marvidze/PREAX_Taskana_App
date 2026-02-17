import { useContext } from "react";
import { SORTS } from "@src/constants/sortsArray";
import styles from "./dropdownItem.module.css";
import Icon from "@src/components/icon/Icon";
import { DropdownContext } from "@src/contexts/dropdownContext/dropdownContext";
import { TaskEditorContext } from "@src/contexts/taskEditorContext/taskEditorContext";

const DropdownItem = ({ type = "default", icon, text, tabIndex, onClick, id }) => {
  const { isDropdownOpen, setIsDropdownOpen, currentSort, setCurrentSort } = useContext(DropdownContext);
  const item = SORTS.find((item) => item.id === id);
  const selected = currentSort === id ? true : false;

  const handleClick = () => {
    setCurrentSort(id);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {type === "dropdownButton" ? (
        <button className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownSelected : null}`} onClick={onClick}>
          <Icon name={item.icon} className={`${styles.icon} ${isDropdownOpen ? styles.iconSelected : null}`} />
          <p className="body-md-semibold">{item.text}</p>
          <Icon name="chevronBottom" className={`${styles.icon} ${isDropdownOpen ? styles.iconSelected : null}`} />
        </button>
      ) : (
        <button
          className={`${type === "header" ? styles.dropdownItemHeader : styles.dropdownItem}`}
          tabIndex={tabIndex}
          onClick={type === "default" ? handleClick : null}
        >
          <Icon name={icon} className={styles.iconItem} />
          <p className={`${type === "header" ? "body-md-bold" : "body-md-regular"}`}>{text}</p>
          {selected ? <Icon name={"check"} className={styles.iconItem} /> : null}
        </button>
      )}
    </>
  );
};

export default DropdownItem;
