import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function temperatureMax() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function temperatureMin() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>

      <WeatherIcon code="10d" />

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {temperatureMax()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {temperatureMin()}
        </span>
      </div>
    </div>
  );
}
