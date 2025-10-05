// import React from "react";
// import { DateTime } from "luxon";

// const ForecastCard = ({ day }) => {
//   return (
//     <div className="day-card">
//       <h3>{DateTime.fromISO(day.dt_txt).toLocaleString(DateTime.DATE_FULL)}</h3>
//       <img
//         alt="weather-icon"
//         src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
//       />
//       <p className="temp">{day.main.temp}°C</p>
//       <p className="desc">{day.weather[0].description}</p>
//     </div>
//   );
// };

// export default ForecastCard;

// import React from "react";
// import { DateTime } from "luxon";


// const ForecastCard = ({ day }) => {
//   const date = day.dt_txt
//     ? DateTime.fromISO(day.dt_txt).toLocaleString(DateTime.DATE_FULL)
//     : "Invalid Date"; // fallback if dt_txt is missing


//   return (
//     <div className="day-card">
//       <h3>{date}</h3>
//       <img
//         alt="weather-icon"
//         src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
//       />
//       <p className="temp">{day.main.temp}°C</p>
//       <p className="desc">{day.weather[0].description}</p>
//     </div>
//   );
// };

// export default ForecastCard;

import React from "react";
import { DateTime } from "luxon";

const ForecastCard = ({ day }) => {
  const date = day.dt_txt
    ? DateTime.fromISO(day.dt_txt).toLocaleString(DateTime.DATE_FULL)
    : "Invalid Date";

  return (
    <div className="day-card">
      <h3>{date}</h3>
      <img
        alt="weather-icon"
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
      />
      <p className="temp">{day.main.temp}°C</p>
      <p className="desc">{day.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;


