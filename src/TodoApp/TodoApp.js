import classNames from "classnames";

const ITEMS = [
  {
    id: 1,
    title: "lorem ipsum 11",
    completed: false,
  },
  {
    id: 2,
    title: "lorem ipsum 22",
    completed: false,
  },
  {
    id: 3,
    title: "lorem ipsum 33",
    completed: true,
  },
  {
    id: 4,
    title: "lorem ipsum 44",
    completed: true,
  },
];

function TodoApp() {
  return (
    <div>
      <ul>
        {ITEMS.map((item) => (
          <li className={classNames({ completed: item.completed })}>
            <input type="checkbox" />
            {item.title}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
