import { useState } from "react";
import UserContext from "./Compomemts/Context/userContext";
import { useContext } from "react";

export default function Auth() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);

  function onSubmit(e) {
    e.preventDefault();

    // fetch("example.com/login").then((Response) => {

    // });

    if (username === "test" && password === "test") {
      userContext.setUser({
        username: "test",
        name: "Beka",
        email: " testexample.com",
      });
    }
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
      <button type="submit">Submit</button>
    </form>
  );
}
