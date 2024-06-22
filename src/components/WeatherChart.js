import React, { useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const WeatherChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const scrollOptions = {
      top: chartRef.current.offsetTop,
      behavior: 'smooth'
    };
    setTimeout(() => {
      window.scrollTo(scrollOptions);
    }, 500);
  }, []);

  return (
    <div ref={chartRef} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default WeatherChart;