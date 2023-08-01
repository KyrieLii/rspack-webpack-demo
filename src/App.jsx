import React, { useState, useEffect } from "react";
import Logo from "./assets/react.svg";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <Logo />
        </a>
      </div>
      <h1>Rspack + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Rspack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
