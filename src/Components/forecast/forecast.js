import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import styles from './forecast.module.css'

const days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"]


const Forecast = ({data}) =>{
    const currentDayInWeek = new Date().getDay()
    const forecastDays = days_of_week.slice(currentDayInWeek, days_of_week.length).concat(days_of_week.slice(0,currentDayInWeek));
    return(
        <div className={styles["main-forecast-container"]}>
            <label className={styles.title}>Daily forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0,7).map((item, index) =>
                    {
                        return(
                            <AccordionItem key={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className={styles["daily-item"]}>
                                            <div className={styles["icon-day"]}>
                                                <img src={`weather icons/${item.weather[0].icon}.png`} alt="weather" className={styles["small-icon"]}/>
                                                <label className={styles.day}>{forecastDays[index]}</label>
                                            </div>
                                            <div className={styles["description-temp"]}>
                                                <label className={styles["weather-description"]}>{item.weather[0].description.toUpperCase()}</label>
                                                <label className={styles.temp}>{Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C</label>
                                            </div>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className={styles["daily-details"]}>
                                        <div>
                                            <div className={styles["daily-items"]}>
                                                <p className={styles["info"]}>Feels like:  </p>
                                                <p className={styles["weather-data"]}>{Math.round(item.main.feels_like)} °C</p>
                                            </div>
                                            <div className={styles["daily-items"]}>
                                                <p className={styles["info"]}>Humidity: </p>
                                                <p className={styles["weather-data"]}>{item.main.humidity} %</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles["daily-items"]}>
                                                <p className={styles["info"]}>Pressure: </p>
                                                <p className={styles["weather-data"]}>{item.main.pressure} mbar</p>
                                            </div>
                                            <div className={styles["daily-items"]}>
                                            <p className={styles["info"]}>Wind: </p>
                                                <p className={styles["weather-data"]}>{item.wind.speed} km/h</p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default Forecast;