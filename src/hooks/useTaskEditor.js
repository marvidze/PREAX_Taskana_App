import { useContext, useEffect, useState } from "react";
import { TaskEditorContext } from "@src/contexts/taskEditorContext/taskEditorContext";

const useTaskEditor = () => {
  const { editTask, editingTask, typeIsOpen, createTask, closeTaskEditor, deleteTask } = useContext(TaskEditorContext);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);
  const [defaultTitleValue, setDefaultTitleValue] = useState("");
  const [defaultPriorityValue, setDefaultPriorityValue] = useState();

  const handleClickClose = () => {
    closeTaskEditor();
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    deleteTask(editingTask.id);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    createTask(title, priority);
    setTitle("");
    setPriority(1);
  };

  const handleEditTask = (e) => {
    e.preventDefault();
    editTask(editingTask.id, title, priority);
  };

  useEffect(() => {
    if (typeIsOpen === "edit" && editingTask) {
      setTitle(editingTask.title);
      setPriority(editingTask.priority);
      setDefaultTitleValue(editingTask.title);
      setDefaultPriorityValue(editingTask.priority);
    } else {
      setTitle("");
      setPriority(1);
      setDefaultTitleValue("");
      setDefaultPriorityValue(1);
    }
  }, [typeIsOpen, editingTask]);

  const handleDisabledEdit = () => {
    return (defaultTitleValue.trim() === title.trim() && defaultPriorityValue === priority) || !title.trim();
  };

  const handleDisabledCreate = () => {
    return !title.trim();
  };

  const text = typeIsOpen === "edit" ? "Редактирование" : "Создание задачи";

  return {
    title,
    setTitle,
    priority,
    setPriority,
    defaultTitleValue,
    defaultPriorityValue,
    handleClickClose,
    handleCreateTask,
    handleEditTask,
    handleDisabledEdit,
    handleDisabledCreate,
    text,
    handleClickDelete,
  };
};

export default useTaskEditor;
