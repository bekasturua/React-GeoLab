import { forwardRef, useImperativeHandler, useRef } from "react";

function Input(props, ref) {
  const inputRef = useRef();

  useImperativeHandler(ref, () => ({
    focus: () => {
      console.log("focues input");
      inputRef.current.focus();
    },
  }));

  return (
    <div>
      <div>
        <input {...props} ref={inputRef} className="input" />
      </div>
    </div>
  );
}

export default forwardRef(Input);
