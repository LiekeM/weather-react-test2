import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          {" "}
          Thu <WeatherIcon code="04d" /> 19 10
        </div>
      </div>
    </div>
  );
}
