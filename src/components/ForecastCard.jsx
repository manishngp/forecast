// import React from "react";
// import { DateTime } from "luxon";

// const ForecastCard = ({ day }) => {
//   const date = day.dt
//     ? DateTime.fromSeconds(day.dt).toLocaleString(DateTime.DATE_FULL)
//     : "Invalid Date";

//   return (
//     <div className="day-card">
//       <h3>{date}</h3>
//       <img
//         alt="weather-icon"
//         src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
//       />
//       <p className="temp">{Math.round(day.main.temp)}°C</p>
//       <p className="desc">{day.weather[0].description}</p>
//     </div>
//   );
// };

// export default ForecastCard;


import React from "react";
import { DateTime } from "luxon";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

const getIcon = (weather) => {
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

const ForecastCard = ({ day }) => {
  const date = day.dt
    ? DateTime.fromSeconds(day.dt).toFormat("cccc | d LLLL yyyy")
    : "Invalid Date";

  return (
    <div className="day-card">
      <h3>{date}</h3>
      <div>{getIcon(day.weather[0])}</div>
      <p className="temp">{Math.round(day.main.temp)}°C</p>
      <p className="desc">{day.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;

