import { useContext, useEffect, useRef } from "react";
import Icon from "@src/components/icon/Icon";
import styles from "./inputText.module.css";
import { TaskEditorContext } from "@src/contexts/taskEditorContext/taskEditorContext";

const InputText = ({ value, onChange }) => {
  const { isOpen } = useContext(TaskEditorContext);
  const inputRef = useRef(null);
  const tabIndexInput = isOpen ? "0" : "-1";

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
    if (!isOpen) onChange("");
  }, [isOpen, onChange]);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleClick = () => {
    onChange("");
  };

  return (
    <label htmlFor="taskName" className={styles.labelTaskName}>
      <div>
        <span className="body-lg-bold">Название</span>
        <span className={styles.requiredStar}>*</span>
      </div>

      <div className={styles.inputWrapper}>
        <input
          tabIndex={tabIndexInput}
          ref={inputRef}
          placeholder="Название задачи"
          className={`${styles.inputTaskName + " body-lg-regular"}`}
          type="text"
          id="taskName"
          required
          value={value}
          onChange={handleChange}
        />

        {value == "" ? (
          ""
        ) : (
          <button type="button" className={styles.buttonXMark} onClick={handleClick}>
            <Icon name="xmark" className={styles.iconXMark} />
          </button>
        )}
      </div>
    </label>
  );
};

export default InputText;
