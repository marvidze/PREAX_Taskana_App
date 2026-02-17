import Content from "@src/components/content/Content";
import Header from "@src/components/header/Header";
import NavBar from "@src/components/navBar/NavBar";
import SideBar from "@src/components/sideBar/SideBar";
import styles from "./appLayout.module.css";
import TaskEditor from "@src/components/taskEditor";
import TaskEditorProvider from "@src/contexts/taskEditorContext/taskEditorProvider";

const AppLayout = ({ children }) => {
  return (
    <TaskEditorProvider>
      <div>
        <div className={styles.layout}>
          <Header />
          <Content>
            <NavBar />
            {children}
            <SideBar />
            <TaskEditor />
          </Content>
        </div>
      </div>
    </TaskEditorProvider>
  );
};

export default AppLayout;
