import { useContext } from "react";
import ThemeContext from "./Context/ThremeContext";

export default function SelectTheme() {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => themeContext.setTheme("light")}>Light</button>
      <button onClick={() => themeContext.setTheme("dark")}>Dark</button>
    </div>
  );
}
