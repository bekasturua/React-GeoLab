import { useState } from "react";
import "./App.css";
import ThemeContext from "./TodoApp/Compomemts/Context/ThremeContext";
import TodoApp from "./TodoApp/TodoApp";



function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TodoApp />
    </ThemeContext.Provider>
  );
}

export default App;
