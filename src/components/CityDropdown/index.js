import React from 'react';
import "./index.css";

const CityDropdown = ({ cities, selectedCity, onChange }) => {
  return (
    <div className="dropdown">
      <select value={selectedCity} onChange={(e) => onChange(e.target.value)}>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;