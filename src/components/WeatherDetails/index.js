import React from 'react';
import './index.css';

const WeatherDetails = ({ data }) => {
  return (
    <div className="weather-details">
      <h2>Weather Details</h2>
      <p><strong>Temperature:</strong> {data.temp}°C</p>
      <p><strong>Feels Like:</strong> {data.feels_like}°C</p>
      <p><strong>Min Temp:</strong> {data.temp_min}°C</p>
      <p><strong>Max Temp:</strong> {data.temp_max}°C</p>
      <p><strong>Humidity:</strong> {data.humidity}%</p>
      <p><strong>Pressure:</strong> {data.pressure} hPa</p>
      <p><strong>Wind Speed:</strong> {data.wind_speed} m/s</p>
    </div>
  );
};

export default WeatherDetails;