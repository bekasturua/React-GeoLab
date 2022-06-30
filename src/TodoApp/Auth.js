import { useState } from "react";

export default function Auth() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    fetch("/").then((Response) => {
        
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
    </form>
  );
}
