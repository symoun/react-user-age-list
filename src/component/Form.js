import { useState } from "react";
import styles from "./Form.module.css";
import Card from "./Card";

export default function Form(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  function changeUserHandler(e) {
    setUserName(e.target.value);
  }
  function changeAgeHandler(e) {
    setAge(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (!userName || age < 1) return;
    props.onSubmit({
      name: userName,
      age: age,
      id: Math.round(Math.random() * 1000),
    });
    setAge("");
    setUserName("");
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          value={userName}
          onChange={changeUserHandler}
          placeholder="Example: Symoun Ong"
        />
        <label>Age(Years)</label>
        <input
          type="number"
          value={age}
          onChange={changeAgeHandler}
          placeholder="Example: 27"
        />
        <div>
          <button type="submit">Add user</button>
        </div>
      </form>
    </Card>
  );
}
