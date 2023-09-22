import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../FontowsomeIcon";

import "./Card.css";

export const Card = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }
  const { name, weather, main } = weatherData;
  const weatherDescription = weather[0].description.toLowerCase();

  let weatherIcon;

  if (weatherDescription.includes("sun")) {
    weatherIcon = icons.sun;
  } else if (weatherDescription.includes("cloud")) {
    weatherIcon = icons.cloudSun;
  } else if (weatherDescription.includes("rain")) {
    weatherIcon = icons.cloudRain;
  } else if (weatherDescription.includes("snow")) {
    weatherIcon = icons.snowflake;
  } else {
    weatherIcon = icons.sun;
  }

  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <p className="city">{name}</p>
          <p className="weather">{weather[0].description}</p>
          <FontAwesomeIcon icon={weatherIcon} className="card-icon" />
          <p className="temp">{Math.round(main.temp)}</p>
          <div className="minmaxContainer">
            <div className="min">
              <p className="minHeading">Min</p>
              <p className="minTemp">{Math.round(main.temp_min)}</p>
            </div>
            <div className="max">
              <p className="maxHeading">Max</p>
              <p className="maxTemp">{Math.round(main.temp_max)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
