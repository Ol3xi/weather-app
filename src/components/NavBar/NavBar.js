import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../FontowsomeIcon";
import "./NavBar.css";

export const NavBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    /* console.log(value); */ // console log for check on input
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-container__logo">
          <h1>Weather App</h1>
        </div>
        <div className="nav-container__search">
          <FontAwesomeIcon icon={icons.search} className="icon" />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
    </>
  );
};
