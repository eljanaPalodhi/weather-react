import react from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
          <footer>
            <a href="" target="_blank" className="">
              {" "}
              Open-source code{" "}
            </a>
            by Eljana Palodhi
            <a href="">hosted on Netlify</a>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
