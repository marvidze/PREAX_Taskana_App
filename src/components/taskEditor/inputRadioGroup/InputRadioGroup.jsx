import { useContext } from "react";
import Icon from "@src/components/icon/Icon";
import styles from "./inputRadioGroup.module.css";
import { TaskEditorContext } from "@src/contexts/taskEditorContext/taskEditorContext";

const InputRadioGroup = ({ value, onChange }) => {
  const { isOpen } = useContext(TaskEditorContext);
  const tabIndexRadio = isOpen ? "0" : "-1";

  const handleChange = (e) => {
    const value = Number(e.target.value);
    onChange(value);
  };

  return (
    <div className={styles.priorityArea}>
      <span className={`${styles.text + " body-lg-bold"}`}>Приоритет</span>

      <div className={styles.radioButtons}>
        <label htmlFor="priorityOne" className={styles.label}>
          <input
            tabIndex={tabIndexRadio}
            onChange={handleChange}
            id="priorityOne"
            value={1}
            name="priority"
            className={styles.realRadio}
            type="radio"
            checked={value === 1}
          />
          <div className={`${styles.customRadioOne} ${styles.customRadio}`}>
            <Icon name="minus" className={styles.iconOne} />
          </div>
        </label>
        <label htmlFor="priorityTwo" className={styles.label}>
          <input
            tabIndex={tabIndexRadio}
            onChange={handleChange}
            id="priorityTwo"
            value={2}
            name="priority"
            className={styles.realRadio}
            type="radio"
            checked={value === 2}
          />
          <div className={`${styles.customRadioTwo} ${styles.customRadio}`}>
            <Icon name="chevronTop" className={styles.iconTwo} />
          </div>
        </label>
        <label htmlFor="priorityThree" className={styles.label}>
          <input
            tabIndex={tabIndexRadio}
            onChange={handleChange}
            id="priorityThree"
            value={3}
            name="priority"
            className={styles.realRadio}
            type="radio"
            checked={value === 3}
          />
          <div className={`${styles.customRadioThree} ${styles.customRadio}`}>
            <Icon name="arrowTwo" className={styles.iconThree} />
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputRadioGroup;
