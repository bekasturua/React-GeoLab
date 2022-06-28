import "./App.css";
import Button from "./Button";
import { useState } from "react";

let buttons = ["btn 1", "btn 2", "btn 3", "btn 4"];

function App() {
  const [count, setCount] = useState(0);

  function onChangeClick(e) {
    setCount(100);
  }

  return (
    <div className="App">
      Current value: {count}
      <Button onClick={onChangeClick} title="Change"></Button>
    </div>
  );
}

export default App;
