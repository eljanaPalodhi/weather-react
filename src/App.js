import react from "react";
import "./App.css";
import Weather from "./Weather";
import Link from "./Github";
import Github from "./Github";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Search Engine </h1>
          <Weather />
          <Github />
        </header>
      </div>
    </div>
  );
}

export default App;
