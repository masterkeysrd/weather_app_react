import React, { useState } from "react";
import LocationUtil from "../utils/LocationUtil";

function WeatherForm(props) {
  const [state, changeState] = useState({
    latitude: "",
    longitude: "",
  });

  const handleSubmit = (event) => {
    state.latitude && state.longitude && props.onSearch(state);
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target.name;
    changeState({
      ...state,
      [name]: value,
    });
  };
  const handleCurrentLocationClick = () => {
    LocationUtil.getLocation(({ longitude, latitude }) => {
      changeState({
        ...state,
        longitude,
        latitude,
      });
    });
  };

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <div className="col-auto">
        <label htmlFor="latitude" className="sr-only">
          Latitude
        </label>
        <input
          className="form-control"
          id="latitude"
          name="latitude"
          value={state.latitude}
          onChange={handleChange}
          placeholder="Latitude"
        ></input>
      </div>
      <div className="col-auto">
        <label htmlFor="longitude" className="sr-only">
          Longitude
        </label>
        <input
          className="form-control"
          id="longitude"
          name="longitude"
          value={state.longitude}
          onChange={handleChange}
          placeholder="Longitude"
        ></input>
      </div>
      <div className="col-auto">
        <button className="btn btn-secondary">Search</button>
      </div>
      <div className="col-auto">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCurrentLocationClick}
        >
          Current Location
        </button>
      </div>
      <div className="col-md-12 text-center">
        <span style={{ fontSize: 12, textTransform: "none" }}>
          * Please write the latitude and longitude fields.
        </span>
      </div>
    </form>
  );
}

export default WeatherForm;
