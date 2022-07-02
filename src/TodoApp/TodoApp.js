import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "./Compomemts/Context/userContext";
import SelectTheme from "./Compomemts/SelectTheme";
import Auth from "./Auth";
import axios from "axios";
import ApiRequest from "./ApiRequest";
import useRequest from "./hooks/useRequest";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const userContext = useContext(UserContext);
  const [date] = useRequest("GET", "tasks");

  useEffect(() => {
    ApiRequest("GET", "tasks")
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function onItemChange(clickedItem) {
    const newValue = todos.map((item) => {
      if (item.id === clickedItem.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(newValue);
  }

  function onAddNewItem(e) {
    e.preventDefault();

    const newItems = [
      {
        id: Date.now(),
        title: value,
        completed: false,
      },
      ...todos,
    ];
    setTodos(newItems);
    setValue("");

    ApiRequest("POST", "tasks/create", {
      text: value,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  function onItemDelete(itemId) {
    const newItems = todos.filter((item) => item.id !== itemId);
    setTodos(newItems);
  }

  const totalItem = todos.length;
  const itemsCompleted = todos.filter((item) => item.completed).length;
  const itemsNotCompleted = todos.filter((item) => !item.completed).length;

  // if (!userContext.user) {
  //   return <Auth />;
  // }

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <form action="" onSubmit={onAddNewItem}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={inputRef}
          />
        </form>
      </div>
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            className={classNames({ completed: item.completed })}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onItemChange(item)}
            />
            {item.text}
            <button onClick={() => onItemDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      სულ: {totalItem}, დასრულებული: {itemsCompleted}, დაუსრულებელი:{" "}
      {itemsNotCompleted}
      <SelectTheme />
    </div>
  );
}

export default TodoApp;
