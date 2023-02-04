import React, { useState } from "react";
import axios from "axios";

import "./weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function submitAction(event) {
    event.preventDefault();
    const apiKey = "b29c908b2b975675d8f2a8a569aaa024";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    console.log(response.data);
    setResult(true);
    setWeather({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: new Date((response.data.dt - response.data.timezone) * 1000),
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
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
            <li>Temperature: {weather.temperature} °C</li>
            <li className="text-capitalize">{weather.description}</li>
            <li>Windspeed: {weather.wind} km/h</li>

            <li>
              <WeatherIcon code={weather.icon} />
            </li>
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
