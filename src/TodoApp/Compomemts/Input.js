import { forwardRef, useContext, useImperativeHandler, useRef } from "react";
import ThemeContext from "./Context/ThremeContext";

function Input(props, ref) {
  const inputRef = useRef();
  const themeContext = useContext(ThemeContext);

  useImperativeHandler(ref, () => ({
    focus: () => {
      console.log("focus input");
      inputRef.current.focus();
    },

    test: () => {
      alert("test");
    },
  }));

  return (
    <div class={`input-${themeContext.theme}`}>
      <input {...props} ref={inputRef} className="input" />
    </div>
  );
}

export default forwardRef(Input);
