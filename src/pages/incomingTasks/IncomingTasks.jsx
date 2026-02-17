import Footer from "@src/components/footer/Footer";
import MainContainer from "@src/components/mainContainer/MainContainer";
import TaskList from "@src/components/taskList/TaskList";
import styles from "./incomingTasks.module.css";
import DropdownProvider from "../../contexts/dropdownContext/DropdownProvider";

const IncomingTasks = () => {
  return (
    <div className={styles.container}>
      <MainContainer>
        <DropdownProvider>
          <TaskList />
        </DropdownProvider>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default IncomingTasks;
