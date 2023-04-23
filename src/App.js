import { useState } from "react";
import Form from "./component/Form";
import UserList from "./component/UserList";
import InvalidInput from "./component/InvalidInput";
import styles from "./App.module.css";

export default function App() {
  const [list, setList] = useState([
    { name: "symoun", age: "27", id: Math.round(Math.random() * 1000) },
    { name: "christine", age: "21", id: Math.round(Math.random() * 1000) },
  ]);
  function addToList(item) {
    setList(() => [item, ...list]);
  }
  function deleteHandler(id) {
    for (const item in list) {
      if (list[item].id === Number(id)) {
        const newList = [
          ...list.slice(0, item),
          ...list.slice(Number(item) + 1),
        ];
        setList(newList);
      }
    }
  }
  return (
    <div className={styles.app}>
      <InvalidInput />
      <Form onSubmit={addToList} />
      <UserList list={list} onDelete={deleteHandler} />
    </div>
  );
}
