import React from "react";
import "./weather-style.css"
import { today , date} from "./getDate";
import AdditionalWeatherInfo from "./additional info/additional.weather.info";

function Weather({weatherData}){
    console.log(weatherData);

    return (
        <div className="main-weather-container">
            <div>
                <div className="main-info">
                    <span className="city">{weatherData.city.toUpperCase()}</span>
                    <div className="date">
                        <p>{today}</p>
                        <span className="date-divided"></span>
                        <p>{date}</p>
                    </div>
                    <div className="sky">
                        <span className="info-weather">{weatherData.weather[0].description.toUpperCase()}</span>
                        <img className="weather-icon" alt="weather" src={`weather icons/${weatherData.weather[0].icon}.png`}/>
                    </div>
                    <span className="temp">{Math.round(weatherData.main.temp)}°C</span>
                </div>
                <div className="max-min">
                    <div className="minMax-temp">
                        <p>Max</p>
                        <p>{Math.round(weatherData.main.temp_max)}°C</p>
                    </div>
                    <span className="divided"></span>
                    <div className="minMax-temp">
                        <p>Min</p>
                        <p>{Math.round(weatherData.main.temp_min)}°C</p>
                    </div>
                </div>   
                <AdditionalWeatherInfo weatherData={weatherData}/>     
            </div>
        </div>
    )
}

export default Weather;