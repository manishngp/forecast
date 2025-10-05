import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import SearchBar from "./components/SearchBar";
import PreviousCities from "./components/PreviousCities";
import ForecastCard from "./components/ForecastCard";
import Loading from "./components/Loading";

const API_KEY = "e1350d392250fe5240cf0bc60d100a84" ;


function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previousCities, setPreviousCities] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cities")) || [];
    setPreviousCities(saved);
  }, []);

  const saveCity = (cityName) => {
    if (!previousCities.includes(cityName)) {
      const updated = [cityName, ...previousCities].slice(0, 5);
      setPreviousCities(updated);
      localStorage.setItem("cities", JSON.stringify(updated));
    }
  };

  const getForecast = async (searchCity) => {
    const targetCity = (searchCity || city).trim();
    if (!targetCity) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${targetCity}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      
    


console.log(data);


      if (data.cod !== "200") {
        toast.error("City not found!");
        setLoading(false);
        return;
      }

      const dailyData = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );


setForecast(dailyData);

      toast.success("Forecast fetched!");
      saveCity(targetCity);
    } catch (err) {
      toast.error("Error fetching data!");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌤️ 5-Day Weather Forecast</h1>

      <SearchBar city={city} setCity={setCity} getForecast={getForecast} />

      <PreviousCities previousCities={previousCities} getForecast={getForecast} />

      {loading && <Loading />}

      <div className="forecast">
        {forecast.map((day, idx) => (
          <ForecastCard key={idx} day={day} />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
