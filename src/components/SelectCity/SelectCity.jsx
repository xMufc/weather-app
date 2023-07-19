import React, { useState } from 'react';
import "./SelectCity.css";

const SelectCity = ({ onCityChange }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [isFirstChoice, setIsFirstChoice] = useState(true);


  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onCityChange(city);
    setIsFirstChoice(false);
  };

  return (
    <div className='city'>
      <label htmlFor="city">Wybierz miasto: </label>
      <select id="city" value={selectedCity} onChange={handleCityChange}>
        {isFirstChoice && <option value="">-- Wybierz --</option>}
        <option value="Warszawa">Warszawa</option>
        <option value="Toruń">Toruń</option>
        <option value="Wrocław">Wrocław</option>
        <option value="Bydgoszcz">Bydgoszcz</option>
        <option value="Kraków">Kraków</option>
        <option value="Gdańsk">Gdańsk</option>
      </select>
    </div>
  );
};

export default SelectCity;