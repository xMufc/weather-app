import React from "react";
import icons from "../../icons/index";
import "./FutureWeather.css";

function FutureWeather({dailyTemperature}) {

  const imageName = `${dailyTemperature.weather.icon}`;
  return (
    <>
      <div className="daily">
        <div className="leftDaily">
          <p>{dailyTemperature.datetime}</p>
        </div>
        <div className="rightDaily">
          <img src={icons[imageName]} alt="Weather_icon"/>
          <h3 className="dailyDay">{Math.round(dailyTemperature.app_max_temp)}°C</h3>
          <h3 className="dailyNight">{Math.round(dailyTemperature.app_min_temp)}°C</h3>
        </div>
      </div>
      
    </>
  );
}

export {FutureWeather};