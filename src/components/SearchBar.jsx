import React from "react";

const SearchBar = ({ city, setCity, getForecast }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && getForecast()}
      />
      {/* <button onClick={() => getForecast()}>Get Forecast</button> */}

      <button
  className="get-forecast-btn"
  onClick={() => getForecast(city)}
>
  Get Forecast
</button>
    </div>
  );
};

export default SearchBar;
