import React, { useState, useEffect } from "react";
import axios from "axios";

import { BallTriangle } from "react-loading-icons";

import "./weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import { wait } from "@testing-library/user-event/dist/utils";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState([]);

  function displayWeather(response) {
    if (response.data.status === "not_found") {
      // TODO: notify the user that this is not a valid city
      alert(`
      ${city} is not a valid city 🥶 
    
      Please try again!`);
    } else {
      setResult(true);
      setWeather(response.data);
    }
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
    axios
      .get(url, {
        validateStatus: function (status) {
          return status <= 300; // Resolve only if the status code is less than 500
        },
      })
      .then(displayWeather)
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  useEffect(() => {
    const apiKey = "ca3bao1ae6a5d30ff038901b133ffc4t";
    axios.get("https://ipapi.co/city/").then((response) => {
      const cityip = response.data;
      const url = `https://api.shecodes.io/weather/v1/forecast?query=${cityip}&key=${apiKey}&units=metric`;
      axios.get(url).then(displayWeather);
    });
  }, []);
  // useEffect runs only once when loading/reloading the page, because it is an empty array/object []

  let form = (
    <form onSubmit={submitAction}>
      <div className="searchbar">
        <input
          className="searchbarInput"
          type="search"
          placeholder="enter city"
          onChange={updateCity}
        />
        <button className="searchbarButton" type="submit">
          {" "}
          🔍{" "}
        </button>
      </div>
    </form>
  );

  if (result) {
    return (
      <div className="weather">
        {form}
        <div className="weatherInfoContainer">
          <h5>
            <WeatherInfo data={weather} day={0} />
          </h5>
        </div>
        <div className="forecastEmojiContainer">
          <div className="row">
            {/* {weather.daily.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecast data={dailyForecast} />
                  </div>
                );
              }
            })} */}
            <div className="col">
              <WeatherForecast data={weather} day={1} />
            </div>
            <div className="col">
              <WeatherForecast data={weather} day={2} />
            </div>
            <div className="col">
              <WeatherForecast data={weather} day={3} />
            </div>
            <div className="col">
              <WeatherForecast data={weather} day={4} />
            </div>
            <div className="col">
              <WeatherForecast data={weather} day={5} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <BallTriangle stroke="#a0a1ec" />
        <br />
        <br />
        <h2>☀️ ❄️ loading.. 🌈 🌧️</h2>
      </div>
    );
  }
}
