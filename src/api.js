import axios from 'axios';

const token = "b7cf9cb0496398d69d14b0dfe1b33e43";
const Data_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city) => {
    try {
      const response = await axios.get(`${Data_URL}/weather?q=${city},IN&appid=${token}&units=metric`);
      return response.data;
    } catch (error) {
      console.error('Error While fetching the weather data', error);
      throw error;
    }
  };