import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

let buttons = ["btn 1", "btn 2", "btn 3", "btn 4"];

function App() {
  function onImageClick() {
    alert("Image clicked");
  }
  function onMouseEnterImg() {
    console.log("Mouse enter");
  }
  function onMouseLeaveImg() {
    console.log("Mouse leave");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onMouseEnter={onMouseEnterImg}
          onMouseLeave={onMouseLeaveImg}
        />
        <p onClick={onImageClick}>
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
        <Button onClick={onImageClick}  title="test"></Button>
      </header>
    </div>
  );
}

export default App;
