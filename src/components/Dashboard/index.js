import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../../api';
import Header from '../Header';
import WeatherChart from '../WeatherChart';
import CityDropdown from '../CityDropdown';
import WeatherDetails from '../WeatherDetails';
import RefreshButton from '../RefreshButton';
import { TailSpin } from 'react-loader-spinner';
import './index.css';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune'];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getWeatherData(selectedCity);
        setWeatherData({
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind_speed: data.wind.speed,
          wind_direction: data.wind.deg, 
          visibility: data.visibility, 
        });
      } catch (error) {
        setError('Error fetching the weather data');
        console.error('Error fetching the weather data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedCity]);


  const handleRefresh = () => {
    setSelectedCity(selectedCity); 
  };

  return (
    <div className="dashboard">
      <Header />
      <CityDropdown cities={cities} selectedCity={selectedCity} onChange={setSelectedCity} />
      <RefreshButton onRefresh={handleRefresh} />
      {loading && 
      (<div className="loader-container">
          <TailSpin
            height="80"
            width="80"
            color="#00BFFF"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>)}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className='main-con'>
          <WeatherChart data={[
            { name: 'Temperature', temp: weatherData.temp },
            { name: 'Feels Like', temp: weatherData.feels_like },
            { name: 'Min Temp', temp: weatherData.temp_min },
            { name: 'Max Temp', temp: weatherData.temp_max },
          ]} />
          <WeatherDetails data={weatherData} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;