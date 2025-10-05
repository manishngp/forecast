import React from "react";
import { DateTime } from "luxon";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";

const getWeatherIcon = (weather) => {
  const main = weather.main;
  switch (main) {
    case "Clear":
      return <WiDaySunny size={50} color="orange" />;
    case "Clouds":
      return <WiCloud size={50} color="gray" />;
    case "Rain":
    case "Drizzle":
      return <WiRain size={50} color="blue" />;
    case "Snow":
      return <WiSnow size={50} color="lightblue" />;
    case "Thunderstorm":
      return <WiThunderstorm size={50} color="purple" />;
    case "Mist":
    case "Fog":
    case "Haze":
      return <WiFog size={50} color="lightgray" />;
    default:
      return <WiDaySunny size={50} color="orange" />;
  }
};

const CurrentDayCard = ({ city, day, sunrise, sunset, timezoneOffset }) => {
  const localTime = DateTime.fromSeconds(day.dt + timezoneOffset).toFormat(
    "cccc | d LLLL yyyy "
  );
  const sunriseTime = DateTime.fromSeconds(sunrise + timezoneOffset).toFormat(
    "h:mm a"
  );
  const sunsetTime = DateTime.fromSeconds(sunset + timezoneOffset).toFormat(
    "h:mm a"
  );

  return (
    <div className="current-card">
      <h4 className="local-time">{localTime}</h4>
      <h2 className="city-name">{city}</h2>
      <p className="weather-desc">{day.weather[0].description}</p>

      <div className="row info-row">
        <div className="icon">{getWeatherIcon(day.weather[0])}</div>
        <div className="temp">{Math.round(day.main.temp)}°C</div>
        <div className="humidity">Humidity: {day.main.humidity}%</div>
        <div className="wind">Wind: {day.wind.speed} m/s</div>
      </div>

      <div className="row info-row">
        <div className="sunrise">
          <WiSunrise /> {sunriseTime}
        </div>
        <div className="sunset">
          <WiSunset /> {sunsetTime}
        </div>
        <div className="high">High: {Math.round(day.main.temp_max)}°C</div>
        <div className="low">Low: {Math.round(day.main.temp_min)}°C</div>
      </div>
    </div>
  );
};

export default CurrentDayCard;
