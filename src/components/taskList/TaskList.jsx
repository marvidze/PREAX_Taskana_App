import AllTasksDone from "@src/components/allTasksDone/AllTasksDone";
import styles from "./taskList.module.css";
import Task from "./task/Task";
import { useContext, useMemo } from "react";
import { TaskEditorContext } from "@src/contexts/taskEditorContext/taskEditorContext";
import Dropdown from "./dropdown";
import { DropdownContext } from "../../contexts/dropdownContext/dropdownContext";

const TaskList = () => {
  const { formData } = useContext(TaskEditorContext);
  const { currentSort } = useContext(DropdownContext);

  const sortFunctions = {
    fromImportant: (a, b) => a.priority - b.priority,
    ofImportant: (a, b) => b.priority - a.priority,
    dateOldNew: (a, b) => b.createdAt.localeCompare(a.createdAt),
    dateNewOld: (a, b) => a.createdAt.localeCompare(b.createdAt),
    fromAtoZ: (a, b) => b.title.localeCompare(a.title),
    fromZtoA: (a, b) => a.title.localeCompare(b.title),
    updateNewOld: (a, b) => a.updatedAt.localeCompare(b.updatedAt),
    updateOldNew: (a, b) => b.updatedAt.localeCompare(a.updatedAt),
  };

  const sortedTasks = useMemo(() => {
    return [...formData].sort(sortFunctions[currentSort]);
  }, [formData, currentSort]);

  return (
    <div className={styles.container}>
      <div className={styles.incoming}>
        <h1>Входящие</h1>
        <Dropdown />
      </div>
      <div className={styles.content}>
        {sortedTasks.length === 0 ? (
          <AllTasksDone />
        ) : (
          <ul className={styles.taskList}>
            {sortedTasks.map((task) => (
              <li key={task.id} className={styles.tasks}>
                <Task id={task.id} priority={task.priority} text={task.title} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
