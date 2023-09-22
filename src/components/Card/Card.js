import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../FontowsomeIcon";

import "./Card.css";

export const Card = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <p className="city">PINK CITY</p>
          <p className="weather">PARTILY CLOUDY</p>
          <FontAwesomeIcon icon={icons.sun} className="card-icon" />
          <p className="temp">32°</p>
          <div className="minmaxContainer">
            <div className="min">
              <p className="minHeading">Min</p>
              <p className="minTemp">30°</p>
            </div>
            <div className="max">
              <p className="maxHeading">Max</p>
              <p className="maxTemp">32°</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
