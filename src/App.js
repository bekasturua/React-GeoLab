import "./App.css";
import Button from "./Button";
import { useEffect, useState } from "react";

let buttons = ["btn 1", "btn 2", "btn 3", "btn 4"];

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("test");

  useEffect(() => {
    fetch("https://google.com");
  }, [name]);

  function onChangeClick(e) {
    setCount((current) => {
      return current + 1;
    });
  }

  return (
    <div className="App">
      Current value: {count}
      <Button onClick={onChangeClick} title="update count"></Button>
      <Button onClick={() => setName("test 123")} title="update name"></Button>
    </div>
  );
}

export default App;
