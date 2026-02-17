import { useState } from "react";
import createID from "../utils/createID";

const useTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [typeIsOpen, setTypeIsOpen] = useState("");
  const [editingTask, setEditingTask] = useState({
    id: "",
    title: "",
    priority: 1,
  });

  const openTaskEditorEdit = (task) => {
    setEditingTask({
      id: task.id,
      title: task.title,
      priority: task.priority,
    });
    setIsOpen(true);
    setTypeIsOpen("edit");
  };

  const openTaskEditorCreate = () => {
    setIsOpen(true);
    setTypeIsOpen("create");
  };

  const closeTaskEditor = () => {
    setIsOpen(false);
    setTypeIsOpen("");
  };

  const editTask = (id, newTitle, newPriority) => {
    setFormData((prevFormData) =>
      prevFormData.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle,
              priority: newPriority,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    );
    closeTaskEditor();
  };

  const deleteTask = (id) => {
    setFormData((prevFormData) => prevFormData.filter((task) => task.id !== id));
    closeTaskEditor();
  };

  const createTask = (titleValue, priorityValue) => {
    const newTask = {
      id: createID(),
      title: titleValue,
      priority: priorityValue,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setFormData((prevFormData) => [...prevFormData, newTask]);

    closeTaskEditor();
  };

  return {
    isOpen,
    setIsOpen,
    createTask,
    formData,
    typeIsOpen,
    openTaskEditorCreate,
    openTaskEditorEdit,
    closeTaskEditor,
    editTask,
    editingTask,
    deleteTask,
    setFormData,
  };
};

export default useTasks;
