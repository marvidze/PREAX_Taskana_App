import { useState } from "react";
import { DropdownContext } from "./dropdownContext";

const DropdownProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState("dateNewOld");

  return <DropdownContext.Provider value={{ isDropdownOpen, currentSort, setCurrentSort, setIsDropdownOpen }}>{children}</DropdownContext.Provider>;
};

export default DropdownProvider;
