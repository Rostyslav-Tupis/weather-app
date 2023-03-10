import React from "react";
import styles from './additional.module.css';
import windPng from './extra weather info/wind.png';
import humidityPng from './extra weather info/humidity.png';
import temperaturesPng from './extra weather info/temperatures.png';
import thermometerPng from './extra weather info/thermometer.png';

function AdditionalWeatherInfo({weatherData}){
    return(
        <div>
            <div className={styles.line}></div>
            <div className={styles["all-extra-info"]}>
                <div className={styles["two-blocks-info"]}>
                    <div className={styles["full-box"]}>
                        <img src={windPng} alt="icon" className={styles.icon}/>
                        <div>
                            <p>{weatherData.wind.speed} km/h</p>
                            <p className={styles.info}>Wind</p>
                        </div>
                    </div>
                    <div className={styles["full-box"]}>
                        <img src={thermometerPng} alt="icon" className={styles.icon}/>
                        <div>
                            <p>{weatherData.main.pressure} mbar</p>
                            <p className={styles.info}>Pressure</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className={styles["full-box"]}>
                    <img src={temperaturesPng} alt="icon" className={styles.icon}/>
                    <div>
                        <p>{Math.round(weatherData.main.feels_like)} °C</p>
                        <p className={styles.info}>Feels like</p>
                    </div>
                </div>
                <div className={styles["full-box"]}>
                    <img src={humidityPng} alt="icon" className={styles.icon}/>
                    <div>
                        <p>{weatherData.main.humidity}%</p>
                        <p className={styles.info}>Humidity</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalWeatherInfo