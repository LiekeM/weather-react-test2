import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="weather-header">Weather App</h1>
        <Weather city="Amsterdam" />

        <footer>
          <a href="https://github.com/LiekeM/weather-react-test2">
            Open-source code
          </a>{" "}
          by Lieke van der Made
        </footer>
      </div>
    </div>
  );
}

export default App;
