import { useState } from "react";
import "./App.css";
import ThemeContext from "./TodoApp/Compomemts/Context/ThremeContext";
import UserContext from "./TodoApp/Compomemts/Context/userContext";
import TodoApp from "./TodoApp/TodoApp";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <TodoApp />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
