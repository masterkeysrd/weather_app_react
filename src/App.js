import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faCloud } from "@fortawesome/free-solid-svg-icons";
import WeatherCard from "./components/WeatherCard";

library.add(faCoffee, faCloud);

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
