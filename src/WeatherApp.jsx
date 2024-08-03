import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Haldia",
        feelsLike: 38.05,
        humidity: 84,
        temp: 31.05,
        tempMax: 31.05,
        tempMin: 31.05,
        weather: "mist",
        
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather Widget by <i>Soumyajit</i></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}