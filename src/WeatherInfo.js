import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  let date = new Date(props.data.daily[props.day].time * 1000);
  let name = props.data.city;
  let temperature = Math.round(props.data.daily[props.day].temperature.day);
  let description = props.data.daily[props.day].condition.description;
  let wind = props.data.daily[props.day].wind.speed;
  let icon = props.data.daily[props.day].condition.icon;

  return (
    <div className="WeatherInfo">
      <h1>{name}</h1>
      <ul>
        <li>
          <FormattedDate date={date} />
        </li>
        <li className="text-capitalize">{description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={icon} size={52} />
            </div>

            <div>
              <TemperatureConversion celcius={temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            {/* <li>Humidity: {props.data.humidity}%</li> */}
            <li>Wind: {wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
