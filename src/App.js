import "./App.css";
import "./weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="weather-header">Weather App</h1>
        <Weather />
      </div>
      <footer>
        <a href="https://github.com/LiekeM/weather-react-test2">
          Open-source code
        </a>{" "}
        by Lieke van der Made
      </footer>
    </div>
  );
}

export default App;
