import { useContext } from "react";
import { SORTS } from "../../../../constants/sortsArray";
import DropdownItem from "../dropdownItem/DropdownItem";
import styles from "./dropdownList.module.css";
import { DropdownContext } from "../../../../contexts/dropdownContext/dropdownContext";
// import useSorts from "../../../../hooks/useSorts";

const DropdownList = () => {
  const { isDropdownOpen, currentSort } = useContext(DropdownContext);

  return (
    <div className={`${styles.dropdownList} ${isDropdownOpen ? styles.openDropdownList : null}`}>
      <DropdownItem type="header" icon="filter" text="Сортировка по:" tabIndex={-1} />
      {SORTS.map((item) => (
        <DropdownItem
          key={item.id}
          id={item.id}
          text={item.text}
          icon={item.icon}
          selected={currentSort === item.id}
          tabIndex={isDropdownOpen ? 0 : -1}
        />
      ))}
    </div>
  );
};

export default DropdownList;
