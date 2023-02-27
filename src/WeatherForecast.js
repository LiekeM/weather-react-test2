import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  let name = props.data.city;
  let temperature = Math.round(props.data.daily[props.day].temperature.day);
  let minimumTemp = Math.round(props.data.daily[props.day].temperature.minimum);
  let maximumTemp = Math.round(props.data.daily[props.day].temperature.maximum);
  let icon = props.data.daily[props.day].condition.icon;
  let date = new Date(props.data.daily[props.day].time * 1000);

  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <FormattedDate date={date} />

          <div>
            {maximumTemp} °C | {minimumTemp} °C
          </div>
          <WeatherIcon code={icon} size={52} />
        </div>
      </div>
    </div>
  );
}
