import Illustration from "@src/components/illustration/Illustration";
import styles from "./statistic.module.css";

const Statistic = () => {
  return (
    <div className={styles.sideContent}>
      <Illustration name="notebook" />
      <div className="body-md-regular">
        <p className={styles.text}>
          Здесь мы поможем тебе управлять твоими
          <br />
          задачами, отслеживать статистику
          <br />и самочувствие.
        </p>
      </div>
    </div>
  );
};

export default Statistic;
