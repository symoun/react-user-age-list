import styles from "./UserList.module.css";
import Card from "./Card";

function ListItem(props) {
  function deleteHandler() {
    props.onDelete(props.children.id);
  }

  return (
    <div className={styles["list-item"]} onClick={deleteHandler}>
      {props.children.name} ({props.children.age})
    </div>
  );
}

export default function UserList(props) {
  function deleteHandler(id) {
    props.onDelete(id);
  }
  return (
    <Card>
      {props.list.length > 0
        ? props.list.map((entry) => (
            <ListItem key={entry.id} onDelete={deleteHandler}>
              {entry}
            </ListItem>
          ))
        : "No Item Entered"}
    </Card>
  );
}
