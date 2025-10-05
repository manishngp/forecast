import React from "react";

const PreviousCities = ({ previousCities, getForecast }) => {
  if (!previousCities.length) return null;

  return (
    <div className="previous-cities">
      <h4>Recently searched:</h4>
      {previousCities.map((c, idx) => (
        <button key={idx} onClick={() => getForecast(c)}>
          {c}
        </button>
      ))}
    </div>
  );
};

export default PreviousCities;
