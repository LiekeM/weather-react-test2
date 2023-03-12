import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";
import WeatherEmoji from "./WeatherEmoji";
import TemperatureEmoji from "./TemperatureEmoji";

export default function WeatherInfo(props) {
  let date = new Date(props.data.daily[props.day].time * 1000);
  let name = props.data.city;
  let country = props.data.country;
  let temperature = Math.round(props.data.daily[props.day].temperature.day);
  let description = props.data.daily[props.day].condition.description;
  let wind = props.data.daily[props.day].wind.speed;
  let humidity = props.data.daily[props.day].temperature.humidity;
  let icon = props.data.daily[props.day].condition.icon;

  return (
    <div className="WeatherInfo">
      <h1>
        in {name}, {country}
      </h1>
      <br />
      <div className="Emoji">
        <TemperatureEmoji temp={temperature} /> + <WeatherEmoji code={icon} />
      </div>

      <br />
      <div className="temperatureContainer">
        <div className="row">
          <div className="col-4">
            <TemperatureConversion celcius={temperature} />
          </div>
          <div className="col-4">
            <br />
            <FormattedDate date={date} />
          </div>

          <div className="col-4 ">
            <div className="text-capitalize">{description}</div>
            <div>Humidity: {humidity} %</div>
            <div>Wind: {wind} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
