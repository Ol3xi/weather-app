import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card/Card";

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const APIKey = "03dab4cfdebf6c72cf63e36374108106";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
        );

        setWeatherData(response.data);
      } catch (error) {
        console.error("Errore nella chiamata API:", error);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city, APIKey]);

  return <div>{weatherData && <Card weatherData={weatherData} />}</div>;
};

export default WeatherComponent;
