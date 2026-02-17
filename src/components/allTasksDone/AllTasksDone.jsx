import styles from "./allTasksDone.module.css";
import Illustration from "@src/components/illustration/Illustration";

const AllTasksDone = () => {
  return (
    <div className={styles.content}>
      <div className={"body-lg-regular " + styles.text}>
        <h2>Все твои задачи организованы как надо</h2>
        <p>Отличная работа! Ты большой молодец!</p>
      </div>

      <Illustration name="emptyTask" />
    </div>
  );
};

export default AllTasksDone;
