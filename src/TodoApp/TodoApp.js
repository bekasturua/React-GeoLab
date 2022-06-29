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
];

function TodoApp() {
  return (
    <div>
      <ul>
        {ITEMS.map((item) => (
          <li>
            <input type="checkbox" />
            lorem ipsum
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
