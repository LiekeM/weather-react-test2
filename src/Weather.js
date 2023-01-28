import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function submitAction(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b29c908b2b975675d8f2a8a569aaa024&units=metric
    `;

    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    console.log(response);
    // check if there is an error  if there is ERROR then alert "Please enter a valid city"

    setResult(true);
    setWeather({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
      <div>
        {form}
        <h3>
          <ul>
            <li>Current weather in {weather.name}</li>
            <li>Temperature: {weather.temperature} °C</li>
            <li>Windspeed: {weather.wind} km/h</li>
            <li>
              <img src={weather.icon} alt="" />
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
