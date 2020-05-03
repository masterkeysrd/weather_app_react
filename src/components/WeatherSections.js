import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faWind,
  faSortAmountDown,
} from "@fortawesome/free-solid-svg-icons";

function WeatherSection(props) {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} size="2x" />
      <div>
        <span style={{ fontSize: 9 }}>{props.description}</span>
      </div>
      <div>
        <span style={{ fontSize: 24 }}>{props.value}</span>
      </div>
    </div>
  );
}

function WeatherSections(props) {
  return (
    <div className="row">
      <div className="col-md-4">
        <WeatherSection
          icon={faWind}
          description="Wind"
          value={`${props.wind}KM/H`}
        />
      </div>
      <div className="col-md-4">
        <WeatherSection
          icon={faTint}
          description="Humidity"
          value={`${props.humidity}%`}
        />
      </div>
      <div className="col-md-4">
        <WeatherSection
          icon={faSortAmountDown}
          description="Pressure"
          value={props.pressure}
        />
      </div>
    </div>
  );
}

export default WeatherSections;
