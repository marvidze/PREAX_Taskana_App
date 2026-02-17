import { TaskEditorContext } from "./taskEditorContext";
import useTasks from "@src/hooks/useTasks";

const TaskEditorProvider = ({ children }) => {
  const {
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
  } = useTasks();

  return (
    <TaskEditorContext.Provider
      value={{
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
      }}
    >
      {children}
    </TaskEditorContext.Provider>
  );
};

export default TaskEditorProvider;
