import { useState } from "react";
import "./App.css";
import WeatherComponent from "./components/WeatherComponent";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <NavBar />
      <WeatherComponent city={city} />
    </div>
  );
}

export default App;
