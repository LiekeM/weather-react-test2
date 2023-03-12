import React from "react";
import WeatherEmoji from "./WeatherEmoji";
import TemperatureEmoji from "./TemperatureEmoji";

export default function WeatherInfo(props) {
  let temperature = Math.round(props.data.daily[props.day].temperature.day);
  let minimumTemp = Math.round(props.data.daily[props.day].temperature.minimum);
  let maximumTemp = Math.round(props.data.daily[props.day].temperature.maximum);
  let icon = props.data.daily[props.day].condition.icon;

  function day() {
    let date = new Date(props.data.daily[props.day].time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">{day()}</div>
          <div>
            {maximumTemp}° <span className="minTemp"> {minimumTemp}° </span>
          </div>
          <TemperatureEmoji temp={temperature} /> + <WeatherEmoji code={icon} />
        </div>
      </div>
    </div>
  );
}
