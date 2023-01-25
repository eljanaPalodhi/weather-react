import react from "react";
import "./App.css";
import Weather from "./Weather";
import Link from "./Github";
import Github from "./Github";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine </h1>
        <Weather />
        <Github />
      </header>
    </div>
  );
}

export default App;
