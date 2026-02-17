import { useContext } from "react";
import styles from "./task.module.css";
import Button from "@src/components/button/Button";
import { TaskEditorContext } from "@src/contexts/taskEditorContext/taskEditorContext";

const Task = ({ id, text, priority }) => {
  const priorityMap = {
    1: styles.checkbox,
    2: styles.checkboxTwo,
    3: styles.checkboxThree,
  };
  const priorityClassName = priorityMap[priority];

  const { openTaskEditorEdit } = useContext(TaskEditorContext);

  const handleClick = () => {
    const task = { id: id, title: text, priority: priority };
    openTaskEditorEdit(task);
  };

  return (
    <div className={styles.container} tabIndex="0">
      <div className={styles.content}>
        <div className={styles.taskNameArea}>
          <button className={priorityClassName}></button>
          <p className={"body-lg-regular " + styles.text}>{text}</p>
        </div>
        <Button size="sm" iconName="edit" className={styles.button} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Task;
