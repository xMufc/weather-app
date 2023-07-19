import React from "react";
import icons from "../../icons/index";
import "./ActualWeather.css";

function ActualWeather({temperature}) {
  const imageName = `${temperature.data[0].weather.icon}`;
  return (
    <>
      <div className="act">
        <div className="actualWeather">
          <div className="upperDiv">
            <p>{temperature.data[0].city_name}</p>
            <img src={icons[imageName]} alt="Weather_icon"/>
          </div>
          <div className="bottomDiv">
            <div className="temp">
              <h1>{temperature.data[0].app_temp}°C</h1>
            </div>
            <div className="stats">
              <p>Wiatr: {Math.round(temperature.data[0].wind_spd * 100) / 100}m/s</p>
              <p>Wilgotność: {temperature.data[0].rh}%</p>
              <p>Ciśnienie: {temperature.data[0].pres}hPa</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
      
  );
}

export {ActualWeather};