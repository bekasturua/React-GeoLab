import { useState } from "react";
import { QueryClient, QuaryClientProvider } from "react-query";
import "./App.css";
import ThemeContext from "./TodoApp/Compomemts/Context/ThremeContext";
import UserContext from "./TodoApp/Compomemts/Context/userContext";
import TodoApp from "./TodoApp/TodoApp";

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);

  return (
    <QuaryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={{ user, setUser }}>
          <TodoApp />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </QuaryClientProvider>
  );
}

export default App;
