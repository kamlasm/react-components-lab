import WeatherData from "./WeatherData"
import WeatherIcon from "./WeatherIcon"

function WeatherForecast({ forecasts }) {

    return <>
        {forecasts.map((forecast, index) => (

            <div className="weather" key={index}>
                <WeatherData
                    day={forecast.day}

                />
                <WeatherIcon
                    img={forecast.img}
                    imgAlt={forecast.imgAlt}
                />
                <WeatherData
                    conditions={forecast.conditions}
                    time={forecast.time}
                />
            </div>
        ))}
    </>
}

export default WeatherForecast