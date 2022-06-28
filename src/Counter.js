import { useEffect, useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((current) => current + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      Current value: {count}
      <Button
        onClick={() => setCount((current) => current + 1)}
        title="update count"
      ></Button>
    </div>
  );
}
