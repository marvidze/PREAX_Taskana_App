import styles from "./dropdown.module.css";
import DropdownList from "./dropdownList/DropdownList";
import { useContext } from "react";
import DropdownItem from "./dropdownItem/DropdownItem";
import { DropdownContext } from "@src/contexts/dropdownContext/dropdownContext";

const Dropdown = () => {
  const { setIsDropdownOpen, currentSort } = useContext(DropdownContext);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdownArea}>
      <DropdownItem onClick={handleClick} type="dropdownButton" id={currentSort} />
      <DropdownList />
    </div>
  );
};

export default Dropdown;
