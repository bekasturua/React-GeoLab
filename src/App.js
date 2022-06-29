import "./App.css";
import Button from "./Button";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import TodoApp from "./TodoApp/TodoApp";

function App() {
  const [showCount, setShowCount] = useState(true);

  return <TodoApp />;
  // return (
  //   <div>
  //     {showCount && <Counter />}
  //     <Button onClick={() => setShowCount(false)}>Hide counter</Button>
  //   </div>
  // );
}

export default App;
