import React, { useState } from "react";
import axios from "axios";

import "./weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response.data);
    setResult(true);

    setWeather({
      name: response.data.city,
      temperature: Math.round(response.data.daily[0].temperature.day),
      description: response.data.daily[0].condition.description,
      date: new Date(response.data.daily[0].time * 1000),
      wind: response.data.daily[0].wind.speed,
      icon: response.data.daily[0].condition.icon,
    });
  }

  function submitAction(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "ca3bao1ae6a5d30ff038901b133ffc4t";

    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
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
