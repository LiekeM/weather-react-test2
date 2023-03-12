import "./App.css";
import "./weather.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="weather-header"> What should I wear today </h1>
        <span className="Weather-block">
          <Weather />{" "}
        </span>
      </div>
      <footer>
        {" "}
        This project was coded by{" "}
        <a href="https://www.liekevandermade.nl/" target="_new">
          Lieke van der Made
        </a>{" "}
        and is{" "}
        <a href="https://github.com/LiekeM/weather-react-test2" target="_new">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://app.netlify.com/teams/liekem/sites" target="_new">
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
