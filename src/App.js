import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="Amsterdam" />
      </header>
      <footer>
        <a href="https://github.com/LiekeM">Open-source code</a> by Lieke van
        der Made
      </footer>
    </div>
  );
}

export default App;
