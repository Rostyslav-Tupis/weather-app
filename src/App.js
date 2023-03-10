import React, {useState} from "react";
import './app-style.css'
import Weather from "./Components/main weather/weather";
import Form from "./Components/form/form";
import Forecast from "./Components/forecast/forecast";
import {WEATHER_API_URL,WEATHER_API_KEY} from './api/api';
import LogoImg from '../src/Components/weather_logo.png';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSeachChange = (searchData) =>{
    const [lat,lon] = searchData.value.split(" ")
    
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async(response) => {
      let weatherResponse = await response[0].json();
      let forcastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forcastResponse });
    })
    .catch((err)=>console.log(err));
  }

  return (
    <div className="APP-conatiner">
      <div className="main-wrapper">
      <div className="logo-box">
        <img src={LogoImg} alt="logo" className="logo"/>
      </div>
        <Form onSearchChange={handleOnSeachChange}/>
        {currentWeather && <Weather weatherData={currentWeather}/>}
      </div>
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
