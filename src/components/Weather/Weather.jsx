import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY, FORECAST_API_URL } from "../../key";
import {ActualWeather} from "../ActualWeather/ActualWeather"
import Chart from '../Chart/Chart';
import SelectCity from '../SelectCity/SelectCity';
import "./Weather.css";
import Cords from "../../cityCords";
import { FutureWeather } from '../FutureWeather/FutureWeather';

function Weather() {
  const [temperature, setTemperature] = useState(null);
  const [hourlyTemperatures, setHourlyTemperatures] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [dailyTemperatures, setDailyTemperatures] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const cityData = Cords.find((city) => city.name === selectedCity);
        if (cityData) {
          const { lat, lon } = cityData;
  
          // Pobieranie danych pogodowych dla aktualnej pogody
          const currentWeatherResponse = await fetch(
            `${WEATHER_API_URL}/current?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}&include=minutely`
          );
          const currentWeatherData = await currentWeatherResponse.json();
          setTemperature(currentWeatherData);
  
          // Pobieranie danych pogodowych dla prognozy godzinowej
          const hourlyForecastResponse = await fetch(
            `${FORECAST_API_URL}/forecast/hourly?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`
          );
          const hourlyForecastData = await hourlyForecastResponse.json();
          const hourlyTemperatures = hourlyForecastData.data.map((hour) => Math.round(hour.temp) * 8);
          setHourlyTemperatures(hourlyTemperatures);
  
          // Pobieranie danych pogodowych dla prognozy 5-dniowej
          const dailyForecastResponse = await fetch(
            `${FORECAST_API_URL}/forecast/daily?lat=${lat}&lon=${lon}&days=5&key=${WEATHER_API_KEY}`
          );
          const dailyForecastData = await dailyForecastResponse.json();
          setDailyTemperatures(dailyForecastData);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
    if (selectedCity) {
      fetchWeatherData();
    }
  }, [selectedCity]);
  

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <SelectCity onCityChange={handleCityChange} />
      {selectedCity ? 
        dailyTemperatures ? (
          <>
            <div className='actualWeatherTemp'>
              <Chart hourlyTemperatures={hourlyTemperatures} />
              <ActualWeather temperature={temperature} />
            </div>
            <div className="dailyWeather">
              <h2>Prognoza 5-dniowa:</h2>
              {dailyTemperatures.data.map((daily) => (
                 <FutureWeather key={daily.datetime} dailyTemperature={daily} />
              ))}
            </div>
          </>
        ) : (
          <p>Ładowanie danych pogodowych...</p>
        ) : (
        <p></p>
        )}
    </div>
  );
}

export default Weather;
