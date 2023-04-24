import styles from "./InvalidInput.module.css";

export default function InvalidInput(props) {
  return (
    <div className={styles.overlay} onClick={props.onValid}>
      <div className={styles["message-container"]}>
        <div className={styles["message-header"]}>Invalid Input</div>
        <div className={styles["message"]}> Wrong Input</div>
      </div>
    </div>
  );
}
