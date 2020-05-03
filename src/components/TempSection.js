import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function TempSection(props) {
  return (
    <div>
      <span style={{ fontSize: 52 }}>{props.temp}°</span>
      <span>
        <FontAwesomeIcon icon={faArrowUp} />
        {props.tempMax}°
      </span>
      <span className="ml-1">
        <FontAwesomeIcon icon={faArrowDown} /> {props.tempMin}°
      </span>
    </div>
  );
}

export default TempSection;
