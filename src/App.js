import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

let buttons = ["btn 1", "btn 2", "btn 3", "btn 4"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {buttons.map((item) => (
          <Button title={item} />
        ))}
      </header>
    </div>
  );
}

export default App;
