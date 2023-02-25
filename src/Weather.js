import React, { useState } from "react";
import axios from "axios";

import "./weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  console.log(props);

  function displayWeather(response) {
    // TODO: remove comments
    console.log(response.data);
    setResult(true);
    setWeather({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: new Date((response.data.dt - response.data.timezone) * 1000),
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function submitAction(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getCoordinates(response) {
    console.log(response);
    setCoordinates({
      latitude: response.data[0].lat,
      longitude: response.data[0].lon,
    });
  }

  function search() {
    const apiKey = "b29c908b2b975675d8f2a8a569aaa024";
    let coordinatesUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    axios.get(coordinatesUrl).then(getCoordinates);
    console.log(coordinates);
    if (coordinates != {}) {
      let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}`;
      axios.get(url).then(displayWeather);
    }
  }

  let form = (
    <form onSubmit={submitAction}>
      <input type="search" placeholder="enter city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (result) {
    return (
      <div className="weather">
        {form}
        <h3>
          <ul>
            <li>
              <FormattedDate date={weather.date} />
            </li>
            <li>Current weather in {weather.name}</li>
            <li>
              {" "}
              <TemperatureConversion celcius={weather.temperature} />{" "}
            </li>

            <li className="text-capitalize">{weather.description}</li>
            <li>Windspeed: {weather.wind} km/h</li>

            <li>
              <WeatherIcon code={weather.icon} />
            </li>
            {/* <li>
              <WeatherForecast coordinates={weather.coordinates} />
            </li> */}
          </ul>
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <h5>Please enter a valid city</h5>
      </div>
    );
  }
}
