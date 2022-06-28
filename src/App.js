import "./App.css";
import Button from "./Button";
import Counter from "./Counter";
import { useEffect, useState } from "react";

function App() {
  const [showCount, setShowCount] = useState(true);

  return (
    <div>
      {showCount && <Counter />}
      <Button onClick={() => setShowCount(false)}>Hide counter</Button>
    </div>
  );
}

export default App;
