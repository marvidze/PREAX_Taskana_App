import { useContext } from "react";
import InputRadioGroup from "./inputRadioGroup/InputRadioGroup";
import InputText from "./inputText/InputText";
import styles from "./taskEditor.module.css";
import TaskEditorButton from "./taskEditorButton/TaskEditorButton";
import { TaskEditorContext } from "@src/contexts/taskEditorContext/taskEditorContext";
import useTaskEditor from "@src/hooks/useTaskEditor";
import Button from "@src/components/button/Button";

const TaskEditor = () => {
  const { isOpen, typeIsOpen } = useContext(TaskEditorContext);
  const {
    title,
    priority,
    handleClickClose,
    handleCreateTask,
    handleEditTask,
    handleDisabledEdit,
    handleDisabledCreate,
    text,
    setTitle,
    setPriority,
    handleClickDelete,
  } = useTaskEditor();

  return (
    <form className={`${styles.rightArea} ${isOpen ? "" : styles.rightAreaNone}`}>
      <div className={styles.contentScroll}>
        <div className={styles.header}>
          <h2 className={styles.headerText}>{text}</h2>
          <InputText value={title} onChange={setTitle} />
        </div>

        <div className={styles.content}>
          <InputRadioGroup value={priority} onChange={setPriority} />
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.buttonArea}>
          <TaskEditorButton
            isOpen={isOpen}
            disabled={typeIsOpen === "edit" ? handleDisabledEdit() : handleDisabledCreate()}
            type="submit"
            variant="dark"
            text={typeIsOpen === "edit" ? "Сохранить" : "Создать"}
            onClick={typeIsOpen === "edit" ? handleEditTask : handleCreateTask}
          ></TaskEditorButton>
          <TaskEditorButton isOpen={isOpen} type="button" variant="light" text="Отмена" onClick={handleClickClose}></TaskEditorButton>
        </div>
        {typeIsOpen === "edit" ? (
          <Button onClick={handleClickDelete} size="md" className={styles.buttonTrash} iconName="trash" iconClassName={styles.iconTrash} />
        ) : null}
      </div>
    </form>
  );
};

export default TaskEditor;
