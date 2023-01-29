import react, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherResults from "./WeatherResults";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function searchWeather() {
    const apiKey = "ed238469f9b5e9d801834270e65449bc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCity}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </form>
        <WeatherResults data={weatherData} />
      </div>
    );
  } else {
    searchWeather();
    return "Searching...";
  }
}
