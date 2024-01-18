import React, { useState } from 'react';
import Search from './Search';
import Content from './Content';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const searchWeather = async (city) => {
    const apiKey = 'b0f0bd80898425b06c214c7a979fc683';
    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`;

    try {
      const response = await fetch(apiEndpoint);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized - Please check your API key');
        }

        // Handle other errors
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setWeatherData({
        city: data.name,
        temperature: data.main.temp.toFixed(0),
        condition: data.weather[0].description,
      });
    } catch (error) {
      console.error('Hava durumu verisi alınamadı:', error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <Search onSearch={searchWeather} />
      {weatherData && <Content weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
